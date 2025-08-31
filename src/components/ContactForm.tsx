import {
	Button,
	Center,
	Container,
	SimpleGrid,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
export const ContactForm = () => {
	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate: {
			name: (value) =>
				/^\S+@\S+\.\S+$/.test(value) ? "Name cannot be an email" : null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
			subject: (value) =>
				value.trim().length === 0 ? "Subject is required" : null,
			message: (value) =>
				value.trim().length === 0 ? "Message is required" : null,
		},
	});

	const handleSubmit = async (values: typeof form.values) => {
		try {
			const response = await fetch(
				import.meta.env.VITE_SUPABASE_RESEND_ENDPOINT,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				},
			);

			if (response.ok) {
				notifications.show({
					title: "Success!",
					message: "Your message has been sent successfully",
					color: "green",
				});
				form.reset();
			} else {
				notifications.show({
					title: "Error",
					message: "Failed to send message",
					color: "red",
				});
			}
		} catch (error) {
			notifications.show({
				title: "Error",
				message: `${error}`,
				color: "red",
			});
		}
	};

	return (
		<Container>
			<Title order={2} ta="center">
				Contact Me
			</Title>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<SimpleGrid cols={2} spacing="md">
					<TextInput
						title="Name"
						label="Name"
						placeholder="Your name"
						required
						{...form.getInputProps("name")}
					/>
					<TextInput
						title="Email"
						label="Email"
						placeholder="your@email.com"
						required
						{...form.getInputProps("email")}
					/>
				</SimpleGrid>
				<TextInput
					title="Subject"
					label="Subject"
					placeholder="Subject"
					required
					{...form.getInputProps("subject")}
				/>
				<Textarea
					title="Message"
					label="Message"
					placeholder="Your message"
					required
					autosize
					minRows={3}
					{...form.getInputProps("message")}
				/>
				<Center>
					<Button type="submit" mt="md">
						Send Message
					</Button>
				</Center>
			</form>
		</Container>
	);
};
