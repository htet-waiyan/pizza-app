
const ProfileForm = () => {
    return (
        <div className="container">
            <div class="mb-3">
                <label for="fullname" class="form-label">Name</label>
                <input type="text" class="form-control" id="fullname" placeholder="Full Name" />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="number" class="form-control" id="phone" placeholder="Country code and phone e.g +65 1234567" />
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary">Save</button>
            </div>
        </div>
    );
}

export default ProfileForm;