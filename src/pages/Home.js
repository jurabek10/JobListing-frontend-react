import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <Container>
      <div>
        <Typography
          sx={{ margin: "10%", fontWeight: "600" }}
          variant="h3"
          align="center"
        >
          Get Hired or Hire people for free!
        </Typography>
        <div>
          <ul className="ul home-list">
            <li>
              <Button className="hire-btn" variant="outlined">
                <Link className="btn-text" to="/employer/dashboard">
                  Hire talent
                </Link>
              </Button>
            </li>
            <li>
              <Button
                className="hire-btn job-list-btn"
                sx={{ margin: "2% 3%" }}
                variant="outlined"
              >
                <Link className="btn-text" to="/employee/feed">
                  Get Job Now
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Home;
