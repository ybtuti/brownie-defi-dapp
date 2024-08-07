import { useEthers } from '@usedapp/core';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "flex-end",
        gap: theme.spacing(1),
    }
}))

export const Header = () => {
    const classes = useStyles();
    const { account, activateBrowserWallet, deactivate } = useEthers();

    const isConnected = account !== undefined;

    return (
        <div className={classes.container}>
            <div>
                {isConnected ? (
                    <button color="primary"
                        onClick={deactivate}>
                        Disconnect
                    </button>
                ) : (
                    <button color="primary"
                        onClick={() => activateBrowserWallet()}>
                        Connect
                    </button>
                )
                }
            </div>
        </div>

    )
}
