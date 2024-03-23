import React from "react";
import ReactMarkdown, { type Options } from "react-markdown";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";

interface Props {
	children: string;
}

const Markdown: React.FC<Props & Options> = ({ children, ...props }) => {
	return (
		<ReactMarkdown
			skipHtml
			remarkPlugins={[remarkGfm, remarkGemoji]}
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
