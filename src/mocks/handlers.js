import { rest } from "msw";

const baseURL = "https://drf-socials-demo-2c6f48eda9f1.herokuapp.com/";

export const handlers = [
    // req = request , res = response , ctx = context
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                // Replace these with relevant user details
                pk: 2,
                username: "brian",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image:
                    "https://res.cloudinary.com/dgjrrvdbl/image/upload/v1/media/../default_profile_qdjgyp",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];
// Be logged in as relevant user when test