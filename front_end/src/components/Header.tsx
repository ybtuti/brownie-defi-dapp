import { useEthers } from "@usedapp/core";
import { Button, makeStyles } from "@material-ui/core";

const usestyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
  },
}));

export const Header = () => {
  const classes = usestyles();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  const isConnected = account !== undefined;

  return (
    <div className={classes.container}>
      <div>
        {isConnected ? (
          <Button color="primary" onClick={deactivate}>
            Disconnect
          </Button>
        ) : (
          <Button color="primary" onClick={activateBrowserWallet}>
            Connect
          </Button>
        )}
      </div>
    </div>
  );
};
