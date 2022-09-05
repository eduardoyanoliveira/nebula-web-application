import React from "react";
import { Photo } from "./styles";

interface IUserPhotoProps {
    photoUrl?: string,
    alt: string,
    size?: string
};

function UserPhoto({ photoUrl, alt, size } : IUserPhotoProps) {

    const url = photoUrl ? `http://localhost:3333/files/${photoUrl}` : '../generic_user_photo.webp';

    return (
        <Photo src={url} alt={alt} size={size} />
    );
};

export default React.memo(UserPhoto);