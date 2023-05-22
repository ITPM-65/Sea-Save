import React from 'react';
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import ChatBot from "react-simple-chatbot";
import {ThemeProvider} from 'styled-components';
import {Grid} from "@mui/material";
import CustomFooter from "../../components/footer/CustomFooter";

const ChatBotView = () => {

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Roboto',
        headerBgColor: '#0265A9',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#0265A9',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our website",
            trigger: "Done",
        },
        {
            id: "Done",
            message: "Please enter your name!",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Hi {previousValue}, Please select your issue",
            trigger: "issues",
        },
        {
            id: "issues",
            options: [
                {
                    value: "Purpose",
                    label: "Purpose",
                    trigger: "Purpose",
                },
                {
                    value: "About",
                    label: "About",
                    trigger: "About"
                },
              
            ],
        },
        {
            id: "Purpose",
            message:
                "The website raises awareness about marine ecosystems, biodiversity, and threats. It provides educational resources to emphasize the importance of preserving marine life.",
            end: true,
        },
        {
            id: "About",
            message:
                "Welcome to our website dedicated to the mesmerizing world below the water's surface. Immerse yourself in the depths of our oceans, where an extraordinary array of life thrives in vibrant ecosystems. Explore the breathtaking beauty of coral reefs, home to a kaleidoscope of colorful fish, intricate formations, and fragile marine life. Learn about the delicate balance that sustains these underwater marvels and the pressing need to protect and preserve them. Discover the wonders of marine migrations, from the majestic movements of whales to the determined journeys of sea turtles. Uncover the challenges our oceans face, including pollution, overfishing, and climate change, and find inspiration in the stories of dedicated individuals and organizations working to safeguard our marine ecosystems. Join us on a journey of knowledge, appreciation, and action as we explore, protect, and celebrate life below water.",
            end: true,
        },
       
    ];

    return (
        <>
            <ResponsiveAppBar/>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2} paddingY={2} sx={{height:"100vh"}}>
                <ThemeProvider theme={theme}>
                    <ChatBot steps={steps} />
                </ThemeProvider>
            </Grid>
            <CustomFooter/>
        </>
    );
};

export default ChatBotView;
