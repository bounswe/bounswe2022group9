import axios from "axios";
export const getProfile = async (userId, token) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const getFollowers = async (userId, token) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}/followers`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const getFollowees = async (userId, token) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}/followings`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const getLikedUsers = async (token, art_item_id) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/${art_item_id}/favourites`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const searchExhibitions = async (userId, token, query) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/exhibitions/search/${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const searchUsers = async (userId, token, query) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/search/${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const searchPosts = async (userId, token, query) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/search/${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const getAllUsers = async (userId, token) => {
  return axios
    .get(`http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getFeed = async (userId, token) => {
  return axios
    .get(`http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/homepage`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getRecommendations = async (userId) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/recommend/art-items/${userId}`,
      {}
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getUserRecommendations = async (userId) => {
  return axios
    .get(`http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/recommend/user/${userId}`, {
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const followUser = async (token, followed_id) => {
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/follow`,
      {
        followed_user_id: followed_id,
        date: new Date().toISOString().split("T")[0],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const unfollowUser = async (token, followed_id) => {
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/unfollow`,
      {
        followed_user_id: followed_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const getFavourites = async (userId, token) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}/favourites`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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


export const updateProfile = async(name, birthDate, email, location, profile_img_url, token, userId) =>{
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}/update-profile-info`,
      {
        name: name,
        email: email,
        birthDate: birthDate,
        location: location,
        profile_img_url: profile_img_url,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const createExhibition = async(description, exhibitionName, type, location, openAddress, startTime, endTime, date, token) =>{
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/exhibition`,
      {
        description: description,
        exhibitionName: exhibitionName,
        type: type,
        location: location,
        openAddress: openAddress,
        startTime: startTime,
        endTime: endTime,
        date: date,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

export const getNotifications = async (userId, token) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}/notifications`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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