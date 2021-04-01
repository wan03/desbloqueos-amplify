class Phone {
    constructor ({id, name, image, description}){
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
    };
    getId(){
        return this.id;
    };
    getName() {
        return this.name;
    };
    getImage(){
        return this.image;
    };
    getDescription(){
        return this.description;
    };

} 

export default Phone;