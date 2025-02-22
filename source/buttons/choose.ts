import {ConstOrPromise} from '../generic-types.js'
import {ManyChoicesOptions} from '../choices/index.js'

export type ChooseActionFunc<Context> = (context: Context, key: string) => ConstOrPromise<string | boolean>

export interface ChooseOptions<Context> extends ManyChoicesOptions<Context> {
	/**
	 * Function which is called when the button is pressed.
	 * The specific button which was pressed is given as second argument `key`.
	 */
	readonly do: ChooseActionFunc<Context>;
}
