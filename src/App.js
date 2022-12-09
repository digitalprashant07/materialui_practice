import React from "react";

import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Container, CssBaseline, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from "./Style";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className="classes.icon" />
          <Typography variant="h6" style={{ marginLeft: "20px" }}>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className="classes.container">
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello Everyone This is a Photo Album and I am trying to make Full Photo Album for Myself
            </Typography>

            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>

              </Grid>
            </div>
          </Container>
        </div>

        <container className={classes.cardGrid} maxWidth="md" >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is Media card. You can use this image to your Project
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom style={{paddingTop:'50px'}}>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          Something New update coming soon ....
        </Typography>
      </footer>
    </>
  );
}

export default App;
