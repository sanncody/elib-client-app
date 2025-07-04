export type Book = {
    _id: string;
    title: string;
    description: string;
    author: Author;
    coverImage: string;  // File uploads (We have to add cloudinary URL over here for image)
    file: string; // Book File URL from cloudinary
};

export type Author = {
    name: string;
};