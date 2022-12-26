import axios from "axios";
import {
  LOGIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  UPDATE_PROFILE_INFO,
  FOLLOW_ENDPOINT,
  UPLOAD_IMAGE,
  UPLOAD_ART,
  UPLOAD_FAVOURITE,
  UPLOAD_COMMENT,
  CREATE_EXHIBITION_ENDPOINT,
  USERS_ENDPOINT,
  ARTS_ENDPOINT,
  COMMENT_INFO_ENDPOINT,
  EXHIBITION_INFO_ENDPOINT,
  NOTIFICATION_INFO_ENDPOINT,
  FOLLOWERS_ENDPOINT,
  FOLLOWINGS_ENDPOINT,
  FAVOURITES_ENDPOINT,
  USER_COMMENTS_ENDPOINT,
  USER_EXHIBITIONS_ENDPOINT,
  USER_NOTIFICATIONS_ENDPOINT,
  ART_FAVOURITES_ENDPOINT,
  ART_COMMENTS_ENDPOINT,
  HOMEPAGE_ENDPOINT,
  SEARCH_ENDPOINT,
  USERS_BASE_ENDPOINT,
  ARTS_BASE_ENDPOINT,
  UNFOLLOW_ENDPOINT,
} from "./urls";

export async function login(info) {
  console.log("response");
  try {
    const response = await axios.post(
      LOGIN_ENDPOINT,
      {
        username: info.username,
        password: info.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function signup(info) {
  try {
    const response = await axios.post(
      SIGNUP_ENDPOINT,
      {
        username: info.username,
        email: info.email,
        password: info.password,
        name: info.name,
        birthdate: info.birthdate,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function update_profile(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      USERS_BASE_ENDPOINT + info.user_id.toString() + UPDATE_PROFILE_INFO,
      {
        "name": info.name,
        "birthdate": info.birthdate,
        "email" : info.email,
        "profile_img_url": info.image_url,
        "location": info.location
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function follow(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      FOLLOW_ENDPOINT,
      {
        "followed_user_id": info.user_id,
        "date": info.date
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function unfollow(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      UNFOLLOW_ENDPOINT,
      {
        "followed_user_id": info.user_id
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function upload_image(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      UPLOAD_IMAGE,
      {
        username: info.username,
        password: info.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function upload_art(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      UPLOAD_ART,
      {
        "owner_id": 1,
        "img_url": "some-image-url-here",
        "description": "my art item description",
        "tags": ["art", "picasso", "contemporary"],
        "date": "2022-01-01"
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function upload_favourite(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      UPLOAD_FAVOURITE,
      {
        "art_item_id": info.art_item_id,
        "date": info.date
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function upload_comment(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      UPLOAD_COMMENT,
      {
        "art_item_id": info.art_item_id,
        "text": info.text,
        "date": info.date
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function create_exhibition(info) {
  console.log("response", info);
  try {
    const response = await axios.post(
      CREATE_EXHIBITION_ENDPOINT,
      {
        "name": "exhibition name",
        "description": "description",
        "type": "virtual",
        "location": "Beylikduzu",
        "open_address": "Acelya Cd. No:23/13 Beylikduzu/Istanbul",
        "start_time": "10:00",
        "end_time": "14:00",
        "date": "2022-08-08",
        "art_items": []
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_users(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_user_info(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_BASE_ENDPOINT + info.user_id.toString(),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_arts(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      ARTS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_art_info(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      ARTS_BASE_ENDPOINT + info.art_id.toString(),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_comment_info(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      COMMENT_INFO_ENDPOINT + info.comment_id.toString(),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_exhibition_info(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      EXHIBITION_INFO_ENDPOINT + info.exhibition_id.toString(),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_notification_info(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      NOTIFICATION_INFO_ENDPOINT + info.notification_id.toString(),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_followers(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_BASE_ENDPOINT + info.user_id.toString() + FOLLOWERS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_followings(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_BASE_ENDPOINT + info.user_id.toString() + FOLLOWINGS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_favourites(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_BASE_ENDPOINT + info.user_id.toString() + FAVOURITES_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_user_comments(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_BASE_ENDPOINT + info.user_id.toString() + USER_COMMENTS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_user_exhibitions(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_BASE_ENDPOINT + info.user_id.toString() + USER_EXHIBITIONS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_user_notifications(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      USERS_BASE_ENDPOINT + info.user_id.toString() + USER_NOTIFICATIONS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_art_favourites(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      ARTS_BASE_ENDPOINT + info.art_id.toString() + ART_FAVOURITES_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_art_comments(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      ARTS_BASE_ENDPOINT + info.art_id.toString() + ART_COMMENTS_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function homepage(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      HOMEPAGE_ENDPOINT,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function get_search_result(info) {
  console.log("response", info);
  try {
    const response = await axios.get(
      SEARCH_ENDPOINT+ info.text,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": info.token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
} 
