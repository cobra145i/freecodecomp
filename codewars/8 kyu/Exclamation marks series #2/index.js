function remove(string) {
    while (string[string.length - 1] == "!") {
        string = string.slice(0, -1)
    }
    console.log(string)
}

remove("Hi!")//, "Hi")
remove("Hi!!!")//, "Hi")
remove("!Hi")//, "!Hi")
remove("!Hi!")//, "!Hi")