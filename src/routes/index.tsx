import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Repro } from "~/components/repro/repro";
import { HiPhoneArrowUpRightOutline as Icon } from "@qwikest/icons/heroicons";
import css from "../shared.module.css";
import { Circle } from "~/components/circle/circle";

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
			{/* red / named slot */}
			<Icon q:slot="red" class={css.red} />
			<p q:slot="red" class={css.red}>
				Text
			</p>
			<Circle q:slot="red" class={css.red} />

			{/* default / green slot */}
			<Icon class={css.green} />
			<p class={css.green}>Some other content</p>
			<Circle class={css.green} />
		</Repro>
	);
});

export const head: DocumentHead = {
	title: "Bug Repro",
};
