function showMod(){
    Notification.requestPermission()
        .then( (permission)=>{
            if (permission == "granted") {
                new Notification("Заголовок", {
                    body: "Текст уведомления"
                })
            }
        })
}

export default showMod;