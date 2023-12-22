"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
    if (hasCookie("cart")) {
        const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");
        return cookieCart;
    }

    return {};
};

export const addProductToCart = (id: string) => {
    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        cookieCart[id] += 1;
    } else {
        cookieCart[id] = 1;
    }

    setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        delete cookieCart[id];
        setCookie("cart", JSON.stringify(cookieCart));
    }
};

export const removeSingleProductFromCart = (id: string) => {
    const cookieCart = getCookieCart();

    if (cookieCart[id]) {
        if (cookieCart[id] > 1) {
            cookieCart[id] -= 1;
            setCookie("cart", JSON.stringify(cookieCart));
        } else {
            delete cookieCart[id];
            setCookie("cart", JSON.stringify(cookieCart));
        }
    }
};
