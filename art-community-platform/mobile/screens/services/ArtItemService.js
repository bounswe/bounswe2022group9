import axios from "axios";

export const getArtItem = async (token, art_item_id) => {
    return axios
        .get(
            "http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/:art_item_id",
            {   
                urlParams : {
                    art_item_id: art_item_id,
            },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
            },
            }
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
  };

export const getLikeUsers = async (token, art_item_id) => {
    return axios
        .get(
            "http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/:art_item_id/favourites",
            {
                urlParams : {
                    art_item_id: art_item_id,
                },
                headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                },
            }
            )
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response;
            });
};
