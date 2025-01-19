import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Repro } from "~/components/repro/repro";
import { HiPhoneArrowUpRightOutline as Icon } from "@qwikest/icons/heroicons";
import css from "../shared.module.css";

export default component$(() => {
	const hasTimeout = useSignal(false);

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		setTimeout(() => {
			hasTimeout.value = true;
		}, 3000);
	});

	return (
		<Repro class={[hasTimeout.value && css.hasTimeout]}>
			<Icon q:slot="red" class={css.red} />
			<p q:slot="red" class={css.red}>
				Text
			</p>
			<Icon class={css.green} />
			<p class={css.green}>Some other content</p>
		</Repro>
	);
});

export const head: DocumentHead = {
	title: "Bug Repro",
};
