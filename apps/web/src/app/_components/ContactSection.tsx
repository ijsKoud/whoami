"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@whoami/ui/form";
import { Input } from "@whoami/ui/input";
import { Textarea } from "@whoami/ui/textarea";
import { Button } from "@whoami/ui/button";
import { SlideFade } from "@/components/animations/SlideFade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@whoami/ui/card";
import { Loader2Icon, SendHorizonalIcon } from "lucide-react";
import { useToast } from "@whoami/ui/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
	const { toast } = useToast();
	const formSchema = z.object({
		name: z.string({ required_error: "Your name is required" }),
		email: z.string({ required_error: "A valid email is required" }).email("Invalid email provided"),
		message: z.string({ required_error: "A message is required" })
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema)
	});

	/**
	 * Sends an email to the receiver
	 * @param values The email content keys
	 */
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

		try {
			await emailjs.send(serviceId, templateId, values, publicKey);
			toast({ title: "Message received", description: "I have received your message, I will contact you back as soon as possible!" });
			form.reset(undefined);
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Message not received",
				description: "There was a problem processing your request, please try again later."
			});
			console.error(error);
		}
	}

	return (
		<section className="flex flex-col items-center justify-center">
			<div className="w-full">
				<Card>
					<CardHeader>
						<SlideFade useInView delay={0.2}>
							<CardTitle className="text-12 max-md:text-8" id="contact">
								Like what I am doing?
							</CardTitle>
							<CardDescription className="!text-5 mt-2 max-md:!text-4">
								Leave your contact details below and I will contact you back as soon as possible!
							</CardDescription>
						</SlideFade>
					</CardHeader>

					<CardContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="John Doe" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Your Email</FormLabel>
											<FormControl>
												<Input placeholder="hi@ijskoud.dev" type="email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea placeholder="I really like your work..." {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type="submit" disabled={form.formState.isSubmitting || !form.formState.isValid}>
									{form.formState.isSubmitting ? (
										<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
									) : (
										<SendHorizonalIcon className="mr-2 h-4 w-4" />
									)}
									Submit
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default ContactSection;
