import { Link } from "react-router-dom";

export const BackgroundCovered = '#282c34';
export const BackgroundUncovered = 'white';
export const MessageColorCovered = 'white';
export const MessageColorUncovered = 'black';

export const HighlightColor = 'yellow';
export const LinkColor = '#61dafb';
export const TopbarColor = '#61dafb';

export const GlobalToolBar = () => {
    return (
        <div className = "global-toolbar">
            <Link to = "/web3_app_testing">Login</Link>
            &nbsp;|&nbsp;
            <Link to = "/web3_app_testing/profile">Profile</Link>
            &nbsp;|&nbsp;
            <Link to = "/web3_app_testing/storage">Storage</Link>
            &nbsp;|&nbsp;
            <Link to = "/web3_app_testing/history">History</Link>
        </div>
    )
}
