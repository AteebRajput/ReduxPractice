import React from 'react';
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import PropTypes from 'prop-types';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);
    

    return (
        <div>
            <span>
                {author ? author.name : 'Unknown Author'}
            </span>
        </div>
    );
};

// Prop type validation
PostAuthor.propTypes = {
    userId: PropTypes.string, // Assuming userId is a string
};

export default PostAuthor;
