import React, { FC } from "react";
import "@wm/styles/build/button.css";

interface ButtonProps {
	label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
	return <button className="wm-button__container">{label}</button>;
};

export default Button;
