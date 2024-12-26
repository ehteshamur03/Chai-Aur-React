import { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                } else {
                    navigate('/');  // Redirect if post doesn't exist
                }
            }).catch((error) => {
                console.error("Error fetching post:", error);
            });
        } else {
            navigate('/');  // Redirect if slug is not present
        }
    }, [slug, navigate]);

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;  // Render nothing if no post is found
}

export default EditPost;
