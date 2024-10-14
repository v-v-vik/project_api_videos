import {SETTINGS} from "./settings";
import {app} from "./app";


app.listen(SETTINGS.PORT, () => {
    console.log(`Server is running on port ${SETTINGS.PORT}`);
})
