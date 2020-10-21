// удаление объекта из массива
// @arr массив объектов
// @id id объекта который нужно удалить в массиве

export function deleteElementArray(arr, id){

    Array.prototype.remove = function(value) {
        let idx = this.indexOf(value);
                
        if (idx != -1) {
            return this.splice(idx, 1);
        }

        return false;
    }

    arr.remove(id);
}

