import React from "react";
import ReactMarkdown, { type Options } from "react-markdown";

interface Props {
	children: string;
}

const Markdown: React.FC<Props & Options> = ({ children, ...props }) => {
	return (
		<ReactMarkdown
			skipHtml
			components={{
				strong: ({ children }) => <span className="dark:text-white text-black">{children}</span>,
				code: ({ children }) => <span className="text-blue-400">{children}</span>,
				a: ({ children, node, ...props }) => (
					<a className="text-blue-400 hocus:text-blue-400/80 transition-colors" {...props}>
						{children}
					</a>
				),
				...props.components
			}}
			{...props}
		>
			{children}
		</ReactMarkdown>
	);
};

export default Markdown;
