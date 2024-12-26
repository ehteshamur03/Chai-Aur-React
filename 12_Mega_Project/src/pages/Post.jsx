import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // To get user data from Redux
import appwriteService from '../appwrite/config';
import { Button, Container } from '../components';
import parse from 'html-react-parser';

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData); // Get user data from Redux

  const isAuthor = post && userData ? post.userId === userData.$id : false; // Check if logged-in user is the author

  useEffect(() => {
    if (slug) {
      // Fetch the post by slug
      appwriteService.getPost(slug)
        .then((fetchedPost) => {
          if (fetchedPost) {
            setPost(fetchedPost);
          } else {
            navigate('/'); // Redirect to home if post doesn't exist
          }
        })
        .catch((error) => {
          console.error('Error fetching post:', error);
          navigate('/');
        });
    } else {
      navigate('/'); // Redirect if no slug
    }
  }, [slug, navigate]);

  const deletePost = () => {
    if (post) {
      appwriteService.deletePost(post.$id) // Delete post by ID
        .then((status) => {
          if (status) {
            // Delete the associated file if post deletion is successful
            appwriteService.deleteFile(post.featuredImage)
              .then(() => {
                navigate('/'); // Redirect to home after deletion
              })
              .catch((error) => {
                console.error('Error deleting file:', error);
              });
          } else {
            console.error('Failed to delete post');
          }
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    }
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">
          {parse(post.content)} {/* Parsing and rendering HTML content */}
        </div>
      </Container>
    </div>
  ) : null;
}
