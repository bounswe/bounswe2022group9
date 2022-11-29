import axios from "axios";
import {
  LOGIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  USERS_ENDPOINT,
  USER_INFO_ENDPOINT,
  ART_INFO_ENDPOINT,
  TAG_INFO_ENDPOINT,
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
  HOMEPAGE_ENDPOINT,
  FOLLOW_ENDPOINT,
  CREATE_EXHIBITION_ENDPOINT,
} from "./urls";
import { useSelector } from "react-redux";

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

export async function users(info) {
  console.log("response", info.token);
  try {
    const response = await axios.get(
      USERS_ENDPOINT,
      {
        body: {
          "token": info.token
      }},
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

export async function user_info(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      USER_INFO_ENDPOINT,
      {
        token: token,
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

export async function art_info(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      ART_INFO_ENDPOINT,
      {
        token: token,
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

export async function tag_info(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      TAG_INFO_ENDPOINT,
      {
        token: token,
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

export async function comment_info(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      COMMENT_INFO_ENDPOINT,
      {
        token: token,
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

export async function exhibition_info(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      EXHIBITION_INFO_ENDPOINT,
      {
        token: token,
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

export async function notification_info(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      NOTIFICATION_INFO_ENDPOINT,
      {
        token: token,
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

export async function followers(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      FOLLOWERS_ENDPOINT,
      {
        token: token,
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

export async function followings(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      FOLLOWINGS_ENDPOINT,
      {
        token: token,
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

export async function favourites(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      FAVOURITES_ENDPOINT,
      {
        token: token,
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

export async function user_comments(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      USER_COMMENTS_ENDPOINT,
      {
        token: token,
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

export async function user_exhibitions(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      USER_EXHIBITIONS_ENDPOINT,
      {
        token: token,
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

export async function user_notifications(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      USER_NOTIFICATIONS_ENDPOINT,
      {
        token: token,
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

export async function art_favourites(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.get(
      ART_FAVOURITES_ENDPOINT,
      {
        token: token,
        user_id:info.user_id,
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

export async function homepage(info) {
  console.log("response");
  try {
    const response = await axios.get(
      HOMEPAGE_ENDPOINT,
      {
        
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
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.post(
      FOLLOW_ENDPOINT,
      {
        user_id : info.user_id,
        token: token,
        followed_user_id: info.followed_user_id,
        date: info.date,
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

export async function create_exhibition(info) {
  console.log("response");
  const { token } = useSelector((state) => state.login);
  try {
    const response = await axios.post(
      CREATE_EXHIBITION_ENDPOINT,
      {
        owner_id: info.owner_id,
        type: info.type,
        location: info.location,
        date: info.date,
        art_items: info.art_items,
        token: token,
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
