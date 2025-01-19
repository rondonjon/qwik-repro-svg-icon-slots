import { type ClassList, component$, Slot } from "@builder.io/qwik";
import css from "../../shared.module.css";

export type ReproProps = {
	class?: ClassList;
};

export const Repro = component$<ReproProps>(({ class: classList }) => (
	<table class={classList}>
		<thead>
			<tr>
				<th class={css.red}>Red Slot</th>
				<th class={css.green}>Green (default) Slot</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<Slot name="red" />
				</td>
				<td>
					<Slot />
				</td>
			</tr>
		</tbody>
	</table>
));
