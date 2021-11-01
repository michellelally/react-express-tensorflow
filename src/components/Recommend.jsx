

// app.get("/recommend", (req, res) => {
//     let userId = req.query.userId
//     if (Number(userId) > 53424 || Number(userId) < 0) {
//         res.send("User Id cannot be greater than 53,424 or less than 0!")
//     } else {
//         recs = model.recommend(userId)
//             .then((recs) => {
//                 res.render("index", { recommendations: recs, forUser: true })
//             })
//     }

// })

import React from 'react';
import MediaItem from './MediaItem';
import { model } from '../model';

class Recommend extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recommendations: model.recommend(props)
        };
    }

    render() {
        return (
            <div>
                <h1 class="font-weight-light text-center">May your virtual tour around Ireland begin!</h1>
                <MediaItem places={this.state.recommendations} />
            </div>
        );
    }
}

export default Recommend;