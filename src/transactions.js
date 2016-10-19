var r = require('rethinkdb');
r.connect('localhost', function (err, conn) {
    conn.use('money');
    r.table('transaction').insert([{
        "id": 1,
        "desc": null,
        "price": 639.00,
        "type": "noncash",
        "created_at": "2016-10-05 16:10:01",
        "updated_at": "2016-10-05 16:10:01",
        "categories":[3]
    }, {
        "id": 2,
        "desc": null,
        "price": 695.90,
        "type": "noncash",
        "created_at": "2016-10-06 03:20:21",
        "updated_at": "2016-10-06 03:20:21",
        "categories":[4]
    }, {
        "id": 3,
        "desc": null,
        "price": 2150.00,
        "type": "noncash",
        "created_at": "2016-10-06 03:20:49",
        "updated_at": "2016-10-06 03:20:49",
        "categories":[4]

    }, {
        "id": 4,
        "desc": null,
        "price": 588.00,
        "type": "noncash",
        "created_at": "2016-10-06 03:21:15",
        "updated_at": "2016-10-06 03:21:15",
        "categories":[3]

    }, {
        "id": 5,
        "desc": null,
        "price": 657.00,
        "type": "noncash",
        "created_at": "2016-10-06 03:21:41",
        "updated_at": "2016-10-06 03:21:41",
        "categories":[5]

    }, {
        "id": 6,
        "desc": null,
        "price": 35.00,
        "type": "noncash",
        "created_at": "2016-10-06 03:22:04",
        "updated_at": "2016-10-06 03:22:04",
        "categories":[5]


    }, {
        "id": 7,
        "desc": null,
        "price": 327.00,
        "type": "noncash",
        "created_at": "2016-10-06 03:22:17",
        "updated_at": "2016-10-06 03:22:17",
        "categories":[5]

    }, {
        "id": 8,
        "desc": null,
        "price": 921.00,
        "type": "noncash",
        "created_at": "2016-10-06 03:22:32",
        "updated_at": "2016-10-06 03:22:32",
        "categories":[3]
    }, {
        "id": 9,
        "desc": null,
        "price": 200.00,
        "type": "noncash",
        "created_at": "2016-10-06 09:38:58",
        "updated_at": "2016-10-06 09:38:58",
        "categories":[3]
    }, {
        "id": 10,
        "desc": null,
        "price": 532.00,
        "type": "noncash",
        "created_at": "2016-10-06 17:31:29",
        "updated_at": "2016-10-06 17:31:29",
        "categories":[3]
    }, {
        "id": 12,
        "desc": null,
        "price": 390.00,
        "type": "noncash",
        "created_at": "2016-10-06 18:02:31",
        "updated_at": "2016-10-06 18:02:31",
        "categories":[7]
    }, {
        "id": 13,
        "desc": null,
        "price": 276.00,
        "type": "noncash",
        "created_at": "2016-10-06 18:03:34",
        "updated_at": "2016-10-06 18:03:34",
        "categories":[7]
    }, {
        "id": 14,
        "desc": null,
        "price": 456.00,
        "type": "noncash",
        "created_at": "2016-10-07 15:59:36",
        "updated_at": "2016-10-07 15:59:36",
        "categories":[3]
    }, {
        "id": 15,
        "desc": null,
        "price": 2000.00,
        "type": "noncash",
        "created_at": "2016-10-08 03:52:24",
        "updated_at": "2016-10-08 03:52:24",
        "categories":[8]
    }, {
        "id": 16,
        "desc": null,
        "price": 237.00,
        "type": "noncash",
        "created_at": "2016-10-08 10:03:13",
        "updated_at": "2016-10-08 10:03:13",
        "categories":[3]
    }, {
        "id": 17,
        "desc": null,
        "price": 435.00,
        "type": "noncash",
        "created_at": "2016-10-08 10:03:31",
        "updated_at": "2016-10-08 10:03:31",
        "categories":[9]
    }, {
        "id": 18,
        "desc": null,
        "price": 149.00,
        "type": "noncash",
        "created_at": "2016-10-09 09:52:15",
        "updated_at": "2016-10-09 09:52:15",
        "categories":[10]
    }, {
        "id": 19,
        "desc": null,
        "price": 540.00,
        "type": "noncash",
        "created_at": "2016-10-09 09:52:51",
        "updated_at": "2016-10-09 09:52:51",
        "categories":[9]
    }, {
        "id": 20,
        "desc": null,
        "price": 506.00,
        "type": "noncash",
        "created_at": "2016-10-09 09:53:01",
        "updated_at": "2016-10-09 09:53:01",
        "categories":[3]
    }, {
        "id": 21,
        "desc": null,
        "price": 799.00,
        "type": "noncash",
        "created_at": "2016-10-10 16:39:37",
        "updated_at": "2016-10-10 16:39:37",
        "categories":[3]
    }, {
        "id": 22,
        "desc": null,
        "price": 338.00,
        "type": "noncash",
        "created_at": "2016-10-10 16:39:50",
        "updated_at": "2016-10-10 16:39:50",
        "categories":[3]
    }, {
        "id": 23,
        "desc": null,
        "price": 75.00,
        "type": "noncash",
        "created_at": "2016-10-10 16:40:30",
        "updated_at": "2016-10-10 16:40:30",
        "categories":[3]
    }, {
        "id": 24,
        "desc": null,
        "price": 613.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:17:54",
        "updated_at": "2016-10-12 13:17:54",
        "categories":[3]
    }, {
        "id": 25,
        "desc": null,
        "price": 1140.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:18:30",
        "updated_at": "2016-10-12 13:18:30",
        "categories":[9,11]
    }, {
        "id": 26,
        "desc": null,
        "price": 40.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:18:52",
        "updated_at": "2016-10-12 13:18:52",
        "categories":[12]
    }, {
        "id": 27,
        "desc": null,
        "price": 149.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[11]
    }, {
        "id": 28,
        "desc": null,
        "price": 195.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[4]
    }, {
        "id": 29,
        "desc": null,
        "price": 936.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[3]
    }, {
        "id": 30,
        "desc": null,
        "price": 469.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[3]
    }, {
        "id": 31,
        "desc": null,
        "price": 343.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[3]
    }, {
        "id": 32,
        "desc": null,
        "price": 250.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[3]
    }, {
        "id": 33,
        "desc": null,
        "price": 72.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[4]
    }, {
        "id": 34,
        "desc": null,
        "price": 650.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[13]
    }, {
        "id": 35,
        "desc": null,
        "price": 120.00,
        "type": "noncash",
        "created_at": "2016-10-12 13:22:37",
        "updated_at": "2016-10-12 13:22:37",
        "categories":[12]
    }


    ]).run(conn, function () {
        console.log('end')
    });

    conn.close();

});

