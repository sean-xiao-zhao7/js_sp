import { Modal } from "./UI/Modal";

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector("form");
        const locateUserButton = document.getElementById("locate-btn");

        locateUserButton.addEventListener("click", this.locateUserHandler);
        addressForm.addEventListener("submit", this.addressFormHandler);
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert("Location not available.");
            return;
        }

        const modal = new Modal("loading-modal-content", "Loading");
        modal.show();
        navigator.geolocation.getCurrentPosition(
            (success) => {
                const coords = {
                    lat: success.coords.latitude,
                    long: success.coords.longitude,
                };
                modal.hide();
            },
            (error) => {
                modal.hide();
                console.log(error);
                alert("Location get error.");
            }
        );
    }

    addressFormHandler() {}
}

new PlaceFinder();
