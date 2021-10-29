import React from 'react';
import {Typography} from "@material-ui/core";
import classes from '../../UI/StyleSheets/FrontPageContent.module.css'

/**
 *
 * @returns {JSX.Element}
 * @name:FrontPagePictureContent
 * @desc:This Function renders 3 icons for our Bot Platforms and an image
 */
//The following code will be refactored once the Database is incorporated as the image files will
//be taken from database
const FrontPagePictureContent = () => {
    return (
        <div>
            <div className={classes['iconStyler-1']}>
                <img src="https://img.icons8.com/color/48/000000/slack-new.png" alt="slack-icon"/>
            </div>
            <div className={classes['iconStyler-2']}>
                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v2.png" alt="twitter-icon"/>
            </div>
            <div className={classes['iconStyler-3']}>
                <img src="https://img.icons8.com/fluency/48/000000/microsoft-teams-2019.png" alt="teams-icon"/>
            </div>

            <Typography variant="h3" color="text.secondary">
                <div className={`${classes.frontPageDesc} `}>
                    A One Stop Solution for your
                </div>
                <div className={`${classes['frontPageDesc-bottom']}`}>
                    Broadcasting
                </div>
            </Typography>
        </div>
    );
};

export default FrontPagePictureContent;
