import { defineComponent } from "vue";
import SimpleButton from "./SimpleButton";
export default defineComponent({
    name: "App",
    setup() {
        return () => (
            <div>
                <h1>Hello World</h1>
                <SimpleButton
                    visual={'funky'}
                    size={'sm'}
                    shape={'square'}
                ></SimpleButton>
                <SimpleButton
                    visual={'edgy'}
                    size={'lg'}
                    shape={'circle'}
                >
                    custom button
                </SimpleButton>
            </div>
        );
    },
})