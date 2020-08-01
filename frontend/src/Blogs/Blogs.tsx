import React from 'react';

interface BlogProps {
    tag: string;
}

const Blogs: React.FC<BlogProps> = ({ tag }) => {
    return (
        <div>
            <h1>{tag}</h1>
        </div>
    );
}

export default Blogs;