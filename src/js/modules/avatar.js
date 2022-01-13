const avatarHandler = () => {
    console.log('avatarHandler');
    const avatarFile = document.getElementById('avatar-change-file');

    if (avatarFile) {
        avatarFile.addEventListener('change', function(e) {
            let file = e.target.files[0];
            let fileReader = new FileReader();

            fileReader.onload = function(eLoad) {
                console.dir(eLoad);
                document.getElementById('profile-avatar').style.backgroundImage = 'url(' + eLoad.target.result + ')';
            };

            fileReader.readAsDataURL(file);
        });
    }

}

export default avatarHandler();