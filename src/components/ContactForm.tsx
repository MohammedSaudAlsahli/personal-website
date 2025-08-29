import {
	Button,
	Center,
	Container,
	SimpleGrid,
	Stack,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

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
				value.length < 2 ? "Name must have at least 2 letters" : null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
			subject: (value) =>
				value.trim().length === 0 ? "Subject is required" : null,
			message: (value) =>
				value.trim().length === 0 ? "Message is required" : null,
		},
	});

	return (
		<Container>
			<Title order={2} ta="center">
				Contact Me
			</Title>
			<form onSubmit={form.onSubmit((values) => {})}>
				<SimpleGrid cols={2} spacing="md">
					<TextInput
						title="Name"
						label="Name"
						placeholder="Your name"
						required
						name="name"
						{...form.getInputProps("name")}
					/>
					<TextInput
						title="Email"
						label="Email"
						placeholder="your@email.com"
						required
						name="email"
						{...form.getInputProps("email")}
					/>
				</SimpleGrid>
				<TextInput
					title="Subject"
					label="Subject"
					placeholder="Subject"
					required
					name="subject"
					{...form.getInputProps("subject")}
				/>
				<Textarea
					title="Message"
					label="Message"
					placeholder="Your message"
					name="message"
					autosize
					required
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
