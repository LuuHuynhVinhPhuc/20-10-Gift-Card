// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
const Content = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };

    return (
        <div className="container">
            <h1>Chúc mừng ngày Phụ nữ Việt Nam 20/10!</h1>
            <button onClick={handleClick}>Nhấn vào đây để nhận lời chúc</button>
            {showMessage && (
                <p className="special-message">
                    Chúc bạn 20/10 vui vẻ, ngập tràn hạnh phúc và luôn tỏa sáng như chính con người bạn!
                </p>
            )}
            <br />
            <br />
            <span className="footer_copy">&#169; Designed by Marcus Luu. All rights reserved</span>
        </div>
    );
}

export default Content