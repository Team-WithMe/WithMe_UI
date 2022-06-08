import React, { FC, ReactNode } from "react";
import "@wm/styles/build/button.css";

interface ButtonProps {
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
	return <button className="wm-button__container">{children}</button>;
};

export default Button;
