import { defineComponent } from "vue";
import { simpleButton, type SimpleButtonVariant } from "../../styled-system/recipes";
export default defineComponent({
    name: "SimpleButton",
    props: {
        visual: {
            type: String as () => SimpleButtonVariant['visual'],
            required: true,
        },
        size: {
            type: String as () => SimpleButtonVariant['size'],
            required: true,
        },
        shape: {
            type: String as () => SimpleButtonVariant['shape'],
            required: true,
        },
    },
    setup(props) {
        return () => (
            <button
                class={simpleButton({
                    visual: props.visual,
                    size: props.size,
                    shape: props.shape,
                })}
            >
                Click me
            </button>
        );
    },
})