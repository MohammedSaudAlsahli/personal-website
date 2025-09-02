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
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
	const { t } = useTranslation();
	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate: {
			name: (value) =>
				/^\S+@\S+\.\S+$/.test(value) ? t("contactForm.err.name") : null,
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : t("contactForm.err.email"),
			subject: (value) =>
				value.trim().length === 0 ? t("contactForm.err.subject") : null,
			message: (value) =>
				value.trim().length === 0 ? t("contactForm.err.message") : null,
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
					title: t("contactForm.notification.success.title"),
					message: t("contactForm.notification.success.message"),
					color: t("contactForm.notification.success.color"),
				});
				form.reset();
			} else {
				notifications.show({
					title: t("contactForm.notification.err.title"),
					message: t("contactForm.notification.err.message"),
					color: t("contactForm.notification.err.color"),
				});
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_err) {
			notifications.show({
				title: t("contactForm.notification.else.title"),
				message: t("contactForm.notification.else.message"),
				color: t("contactForm.notification.else.color"),
			});
		}
	};

	return (
		<Container>
			<Title order={2} ta="center">
				{t("contactForm.container.title")}
			</Title>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<SimpleGrid cols={2} spacing="md">
					<TextInput
						title={t("contactForm.container.form.name.title")}
						label={t("contactForm.container.form.name.label")}
						placeholder={t("contactForm.container.form.name.placeholder")}
						required
						{...form.getInputProps("name")}
					/>
					<TextInput
						title={t("contactForm.container.form.email.title")}
						label={t("contactForm.container.form.email.label")}
						placeholder={t("contactForm.container.form.email.placeholder")}
						required
						{...form.getInputProps("email")}
					/>
				</SimpleGrid>
				<TextInput
					title={t("contactForm.container.form.subject.title")}
					label={t("contactForm.container.form.subject.label")}
					placeholder={t("contactForm.container.form.subject.placeholder")}
					required
					{...form.getInputProps("subject")}
				/>
				<Textarea
					title={t("contactForm.container.form.message.title")}
					label={t("contactForm.container.form.message.label")}
					placeholder={t("contactForm.container.form.message.placeholder")}
					required
					autosize
					minRows={3}
					{...form.getInputProps("message")}
				/>
				<Center>
					<Button type="submit" mt="md">
						{t("contactForm.container.button")}
					</Button>
				</Center>
			</form>
		</Container>
	);
};
