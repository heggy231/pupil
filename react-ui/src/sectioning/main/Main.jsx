import { Switch } from "react-router-dom"
import  Routes  from "../../routes/Index"
import "./styles.css"

function Main() {
    return (
    <div>
    <main>
        <Switch>
            <Routes />
        </Switch>

    </main>
</div>
    )
}

export default Main