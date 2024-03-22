"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendHorizonalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface Props {
	/** Whether the form is disabled or not */
	disabled: boolean;
}

const InputForm: React.FC<Props> = ({ disabled }) => {
	const router = useRouter();
	const formSchema = z.object({
		message: z.string({ required_error: "A message is required" }).max(1024, "A message cannot be longer than 1024 characters.")
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema)
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		try {
			const res = await fetch("/api/message", { body: JSON.stringify(data), method: "post" });
			if (!res.ok) {
				const json = await res.json();
				console.error(`Error: ${JSON.stringify(json)}`);

				toast("Message not sent", {
					description: `There was an error processing your request: ${json.message ?? "unkown error"}`
				});
				return;
			}

			router.refresh();
		} catch (error) {
			console.log(error);
			toast("Message not sent", {
				description: "There was an error processing your request: unknown error"
			});
		}
	}

	return (
		<div className="w-full mt-2">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea placeholder="I really like your work..." {...field} disabled={disabled} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" disabled={disabled || form.formState.isSubmitting || !form.formState.isValid}>
						{form.formState.isSubmitting ? (
							<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
						) : (
							<SendHorizonalIcon className="mr-2 h-4 w-4" />
						)}
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default InputForm;
