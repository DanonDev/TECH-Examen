import { useState } from 'react';
import axios from 'axios';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        const authToken = JSON.parse(sessionStorage.getItem('token'));

        if (!authToken || !authToken.token) {
            console.error('Authentication token is missing');
        }
        axios
            .post(
                'http://localhost:3000/reviews',
                { text: newComment },
                {
                    headers: {
                        Authorization: `Bearer ${authToken.token}`,
                    },
                }
            )
            .then((response) => {
                setComments([...comments, response.data]); // Add the new comment to the list
                setNewComment(''); // Clear the input field
            })
            .catch((error) => {
                console.error('Error posting comment:', error);
            });
    };

    return (
        <div>
            <h2>Comments</h2>
            <div>
                <textarea
                    rows="4"
                    cols="50"
                    value={newComment}
                    onChange={handleCommentChange}
                ></textarea>
            </div>
            <div>
                <button onClick={handleCommentSubmit}>Post Comment</button>
            </div>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;
