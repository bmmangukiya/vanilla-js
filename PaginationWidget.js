class PaginatedAddressWidget {
    constructor(addresses) {
        this.addresses = addresses;
        this.currentPage = 1;
        this.pageSize = 5;
    }

    displayCurrentPage() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const currentPageAddresses = this.addresses.slice(startIndex, endIndex);

        console.log(`Page ${this.currentPage}:`);
        currentPageAddresses.forEach(address => console.log(address));
    }

    nextPage() {
        if (this.currentPage < this.totalPages()) {
            this.currentPage++;
            this.displayCurrentPage();
        } else {
            console.log("Already on the last page");
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.displayCurrentPage();
        } else {
            console.log("Already on the first page");
        }
    }

    totalPages() {
        return Math.ceil(this.addresses.length / this.pageSize);
    }
}

// Example usage:
const addresses = [
    "123 Main St",
    "456 Elm St",
    "789 Oak St",
    "101 Maple St",
    "202 Pine St",
    "303 Cedar St",
    "404 Birch St",
    "505 Walnut St",
    "606 Chestnut St",
    "707 Spruce St",
    "808 Fir St",
    "909 Ash St"
];

const widget = new PaginatedAddressWidget(addresses);
widget.displayCurrentPage(); // Display first page
widget.nextPage(); // Display next page
widget.nextPage(); // Display next page
widget.previousPage(); // Display previous page
