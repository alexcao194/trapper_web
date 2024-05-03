'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "439189839e49dfdde565ca770ef557a6",
"manifest.json": "5d0e386a52edc4d207d4d5c3b9a6e53f",
"splash/img/dark-2x.png": "af04137277b5f9ce25a343fe2bd1968f",
"splash/img/dark-1x.png": "2a418c8105ede92b414972137ce4494f",
"splash/img/dark-3x.png": "f6971422737ef1a45d93315564feb8ab",
"splash/img/light-2x.png": "af04137277b5f9ce25a343fe2bd1968f",
"splash/img/light-3x.png": "f6971422737ef1a45d93315564feb8ab",
"splash/img/dark-4x.png": "9ba0f26c34a13dbaae6b98336af043e7",
"splash/img/light-1x.png": "2a418c8105ede92b414972137ce4494f",
"splash/img/light-4x.png": "9ba0f26c34a13dbaae6b98336af043e7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/png/default_avatar.png": "1154cb83510cf85a0e5e8da92315d836",
"assets/assets/banner.png": "dd4b02bf490d0ab7d193431eba438581",
"assets/assets/banner_background.png": "0d20995e1d9db751367b91f8a72684cc",
"assets/assets/launcher.png": "aa73b30754d501d8e56ecaeab3cd98f7",
"assets/assets/sticker/cat_hug.webp": "5ddd38adffa49c7c14e1d464f12f7b93",
"assets/assets/sticker/1714717900974.webp": "c53a00879cb66aa79b54c2a0dc8766bc",
"assets/assets/sticker/1714717169392.webp": "b5e9b260b1fe761794589dbbc6c5435d",
"assets/assets/sticker/1714717854847.webp": "b32f86e550226d9beb11581c203daaa0",
"assets/assets/sticker/1714716352819.webp": "75287e46429ea7dc73b4e128688d0f44",
"assets/assets/sticker/1714716987889.webp": "73c229eb51fff9fc2fabf0aa71c82e03",
"assets/assets/sticker/1714716336727.webp": "0b9eb1ca87609319794444e190488bb2",
"assets/assets/sticker/1714716330704.webp": "d67b153d6b1521be67c4482aa4181c8c",
"assets/assets/sticker/1714716326684.webp": "6b868cef1fd5b29ef0735e257ec4fa86",
"assets/assets/sticker/1714717925086.webp": "0e705bdc5a9510367aa366305a1111fc",
"assets/assets/sticker/person_hmm.webp": "270cad574da7bd5b0495bb8c7700e3cb",
"assets/assets/sticker/1714716840692.webp": "8bcfbda863f3ead34dcd4662aa235ab9",
"assets/assets/sticker/1714716663404.webp": "88d06ad94848a370a433fbd823676e0c",
"assets/assets/sticker/1714716465364.webp": "bc54bcd58af636654d1657dc00d1db55",
"assets/assets/sticker/1714716332712.webp": "8bc2ddf9736ab5fd60c0af28bc04d2d7",
"assets/assets/sticker/1714717820711.webp": "91ce020702719662827141cc6157bf48",
"assets/assets/sticker/1714716511814.webp": "f7caea8abdee0a45754048ae37eb43fd",
"assets/assets/sticker/1714716676454.webp": "5878d4e6e4be0d690c7e760dd6a060f1",
"assets/assets/sticker/dog_angry.webp": "f7caea8abdee0a45754048ae37eb43fd",
"assets/assets/sticker/1714716823622.webp": "af64da3da3ccad78ee1af149fa10bc8c",
"assets/assets/sticker/1714717146294.webp": "ec350627652ceeb890b35b66be9c0cc3",
"assets/assets/sticker/1714717440349.webp": "b952c9de3f8b0c09085c564ba96e27bd",
"assets/assets/sticker/1714718021469.png": "bfaf8e6b68218a8c8b1272805d355fff",
"assets/assets/sticker/1714717894697.webp": "e1178748691efde7d5efb27a0e3b4276",
"assets/assets/sticker/1714716505777.webp": "008f156db243c4200980c55e9960a37f",
"assets/assets/sticker/1714717871920.webp": "07c11dc5704a8ac28cafeb96c8ab947c",
"assets/assets/sticker/1714717015821.webp": "1c67908bbdbc7014178a7ebd58774998",
"assets/assets/sticker/1714717842794.webp": "d03eff19e4832e1def0f9b33f514b7eb",
"assets/assets/sticker/1714716689503.webp": "8a5d61319dfaa30ff04ac2c71232474b",
"assets/assets/sticker/1714716375913.webp": "6e006014b08dc991c547cddf8567ba0e",
"assets/assets/sticker/1714716356845.webp": "e8cbd874af41ec8ef89cd5b3915fb945",
"assets/assets/sticker/1714716555029.webp": "8e31d3db5cd58b921f216756bc059ecf",
"assets/assets/sticker/1714717183433.webp": "94f53345d9cf312a2df3e0aae8a9372d",
"assets/assets/sticker/1714716670439.webp": "3fb644df44fdad4721e617b69e75e404",
"assets/assets/sticker/dog_whoa.webp": "370f22046aa12314909b6589ec6ff859",
"assets/assets/sticker/1714716451594.webp": "b890041db08de9c708c40dab48bc7209",
"assets/assets/sticker/1714717878937.webp": "e993c11eca93dcd362924d64b8308f2e",
"assets/assets/sticker/1714716423101.webp": "cc5e0bf899124f9796ba2bb3214e5934",
"assets/assets/sticker/1714717617160.png": "ceaa844e18a2d5719f22fd8c0d030c51",
"assets/assets/sticker/1714716976672.webp": "0cc43f5e65cef54f43f78e60e2ebd467",
"assets/assets/sticker/1714716467460.webp": "95d7a9a67aa8453431da1626e96aafcb",
"assets/assets/sticker/1714716476243.webp": "23f654f337db096e80b1235347bcf989",
"assets/assets/sticker/1714716455236.webp": "9e1cd5e7f733926aaa601e2cde36e902",
"assets/assets/sticker/1714716994756.webp": "7a5211e312b3d57da428a935b4730be5",
"assets/assets/sticker/1714716328692.webp": "dbaee7ba0a1163cfea13a6339a5ae1e9",
"assets/assets/sticker/1714718055616.png": "9edc0df32c4991ca2d748e3dbe457c58",
"assets/assets/sticker/1714716441166.webp": "7589d49ac2f26d80ba6408e6392265d6",
"assets/assets/sticker/1714716697550.webp": "8aa8d49a5424dc8a4df3e9aff2f30fed",
"assets/assets/sticker/1714716360862.webp": "603373eada7161e3f0108ee9cfb730a0",
"assets/assets/sticker/1714717623190.png": "9207be97ce60559fac265b334e3c937c",
"assets/assets/sticker/1714717493578.webp": "6ae1514d675d2f211eb04c097e33c71c",
"assets/assets/sticker/1714716396010.webp": "8c21b0ecd9f94b531d59e784955c2588",
"assets/assets/sticker/1714716298567.webp": "e005a73658f8c6e6e2e0e872d7bf6155",
"assets/assets/sticker/1714717133236.webp": "eb3fdc63109e8365c6412493c0289c1d",
"assets/assets/sticker/1714717231608.webp": "cd854776b042e7fd55a74ed2590b93ae",
"assets/assets/sticker/1714717224586.webp": "1a459324f8cb2aa7e02744cc4adc1390",
"assets/assets/sticker/1714717986308.webp": "86b5f85f234679ac22b67afed40accd8",
"assets/assets/sticker/1714718003374.png": "5095b7231193124ce75fb8b30bce08a7",
"assets/assets/sticker/1714717600059.png": "3c79e94dd3fc88c482b7b7502145c3f9",
"assets/assets/sticker/1714717085070.webp": "dc4856a79183f5e33b974824dfea94c3",
"assets/assets/sticker/1714716234253.webp": "84ab0dfc5fb9070153f078bb782436ec",
"assets/assets/sticker/1714716765416.webp": "15c57dc01a05cdf96ebecceb919a06c3",
"assets/assets/sticker/1714717889549.webp": "4a0b5ae9a0cb58157c1c8b60d9379457",
"assets/assets/sticker/1714717992327.png": "1c9de123e4a513046fb819998a24d247",
"assets/assets/sticker/1714716293545.webp": "533086f836b9846ac5a237617ee4add2",
"assets/assets/sticker/1714716346796.webp": "003353b4755a9e52ae65d9b9690081b5",
"assets/assets/sticker/1714716340762.webp": "29f6c741b2a96a6b463334029caf3181",
"assets/assets/sticker/1714716385970.webp": "228f00455a728dce522fbd40b5413b4c",
"assets/assets/sticker/1714716596177.webp": "3fe8520b5bc471ad3f40967e6f60b66e",
"assets/assets/sticker/1714717057966.webp": "3621615c88e9ced881ddf00487cedd20",
"assets/assets/sticker/1714717156329.webp": "7b4adf41773e8618f6512f1ad59bd621",
"assets/assets/sticker/1714717975266.webp": "b7b8e23d121970e4613c3d48bfa5e413",
"assets/assets/sticker/1714717151311.webp": "7861c3172fc8ec4933495889b4e75079",
"assets/assets/sticker/1714717434332.webp": "5dc8361beb176da22004481f4cc8f722",
"assets/assets/sticker/1714716348799.webp": "7776d9d4011da6d9fb55d573641fdcee",
"assets/assets/sticker/1714716722611.webp": "3d86e716c0ca8203f0d6213c8d5624ad",
"assets/assets/sticker/1714716730641.webp": "76e1bfdc634127f7fa90c2b4a9fc1f91",
"assets/assets/sticker/1714716829650.webp": "7861c3172fc8ec4933495889b4e75079",
"assets/assets/sticker/1714716631324.webp": "10f1bf760e3bf46d3d52b7405b2099cc",
"assets/assets/sticker/1714718059645.png": "3d4b2168fb04ec2a2ff15b561af2f270",
"assets/assets/sticker/1714717676406.png": "27acf8de7580264b7270e70cd74084a4",
"assets/assets/sticker/1714716288508.webp": "81f787e4ac99986302dac114222608a6",
"assets/assets/sticker/1714717884960.webp": "347811ab56d5461430394e5ef94cf923",
"assets/assets/sticker/1714716283494.webp": "9b2051a4fb67e02b88c251aef9e7eb0f",
"assets/assets/sticker/1714716528900.webp": "570acf6a38174b02fbe303cd338d80ec",
"assets/assets/sticker/1714717238628.webp": "c80948bdd4a64ae9ee208bb7ea279039",
"assets/assets/sticker/1714716369901.webp": "e5eb9f05978b22d73eeddc20ddca6d8a",
"assets/assets/sticker/1714717919051.webp": "ec963d0afc3920ac43c917ca2f5d1366",
"assets/assets/sticker/1714717969250.webp": "124f4bf51fbb691aac44b97a3d8abc54",
"assets/assets/sticker/1714716480603.webp": "17cec94648704ca5b433792fa0af9d80",
"assets/assets/sticker/1714716758400.webp": "85a7614068237773c11b009fdea6cedf",
"assets/assets/sticker/1714717252670.webp": "77da3fb3768cbfc5f7fbcca906f788be",
"assets/assets/sticker/1714716607229.webp": "fcd39af18f5888106d4bcedb972ec81d",
"assets/assets/sticker/1714716457252.webp": "2b9daa6557512d6bad46357ac927a37d",
"assets/assets/sticker/1714717001767.webp": "ac0054ea7bc53b440e99e2f690daa5f4",
"assets/assets/sticker/1714716471190.webp": "f407e5e3d5a307208aaf31532ef779f0",
"assets/assets/sticker/1714716371896.webp": "d68742872fa2ee9f8898c6c8135cee17",
"assets/assets/sticker/1714716965148.webp": "4290fbc37a8ace7cd6277abaea8e512d",
"assets/assets/sticker/1714717600057.png": "3c79e94dd3fc88c482b7b7502145c3f9",
"assets/assets/sticker/1714717569929.png": "ff0199aeaca557db5d2eba418b3d98f3",
"assets/assets/sticker/cat_haha.webp": "6d08e356cd881ade5287403c3dcfced4",
"assets/assets/sticker/1714717190470.webp": "91fb75e4f5211223b92dde5e9bd4f056",
"assets/assets/sticker/1714718009406.png": "3d9de71b0b741008c893b72b22bf1c48",
"assets/assets/sticker/person_relax.png": "1979324f3e894ef89b3be3c6bbde18ff",
"assets/assets/sticker/1714716804552.webp": "d5edd05c2d6fc43804bab017e59944d0",
"assets/assets/sticker/1714717063981.webp": "18b72d828b79646eebdeb8623e3b5aa1",
"assets/assets/sticker/1714717411238.webp": "dff77cf384cd3a5fbbfdfe48f97c80a9",
"assets/assets/sticker/1714716456086.webp": "417c27036d2a3e8546c2289234a2d09d",
"assets/assets/sticker/dog_i_miss_you.webp": "6b868cef1fd5b29ef0735e257ec4fa86",
"assets/assets/sticker/1714717864888.webp": "c34618ac047a35377fc61ad54fdbee86",
"assets/assets/sticker/1714716366886.webp": "ca9ce9ed0f38b3df717b5c71c3633717",
"assets/assets/sticker/1714717794600.webp": "667516aa19c80ec2aa35dca5720cd8d5",
"assets/assets/sticker/1714716236281.webp": "7e3dd6a56479644ac66a1954a72a72f7",
"assets/assets/sticker/1714716518844.webp": "5ee10ff1dc47e80bda2b3054ed73c819",
"assets/assets/sticker/1714716601192.webp": "da93ba2dc74f64115f89ca86b84a8aaa",
"assets/assets/sticker/1714716981878.webp": "45e252472d6ebdd71b416eb26c3160df",
"assets/assets/sticker/1714717487551.webp": "f0a1d23e617ae10e75ad5620563b4b0e",
"assets/assets/sticker/1714717534771.png": "b99938f0c1900b9185c814bc4414998a",
"assets/assets/sticker/1714717036883.webp": "704f612232d5e20c2bb3d9f7d1db0c70",
"assets/assets/sticker/1714717670384.png": "3c79e94dd3fc88c482b7b7502145c3f9",
"assets/assets/sticker/1714717043909.webp": "1c24e4e5ae227c52350be5d1307ce00e",
"assets/assets/sticker/1714716511813.webp": "f7caea8abdee0a45754048ae37eb43fd",
"assets/assets/sticker/1714717071022.webp": "ab24bfd81f4654592324944d070ce873",
"assets/assets/sticker/1714716447187.webp": "72fdcc95c69fa7b4276c2faf2baf54ba",
"assets/assets/sticker/1714717516663.png": "1282515c21a46c070f2750d5918b01f1",
"assets/assets/sticker/1714716318659.webp": "4a0ebf8c016c7457880b3ea0757a478e",
"assets/assets/sticker/1714717893293.webp": "fe0a64079ebdf46065a442c38d2e2ae8",
"assets/assets/sticker/1714716476315.webp": "131914685b51c4ce13cc5532e23ee878",
"assets/assets/sticker/1714717892002.webp": "c5b1a17bbfed0ec149019b547aaafe6a",
"assets/assets/sticker/1714717008800.webp": "a639c41634740cd491c4b264e922e8ee",
"assets/assets/sticker/1714716237306.webp": "ea305e0ebf98c41c075fc6568bab6104",
"assets/assets/sticker/1714717447387.webp": "79e44a49677f7c938c0113a261a5af5d",
"assets/assets/sticker/1714717029872.webp": "7a3d66d072a86ee7803ef4befac97625",
"assets/assets/sticker/1714716771431.webp": "81bd27f8ba1e9c2ab10f010bf912e5e3",
"assets/assets/sticker/1714716268410.webp": "8e784c63b3bd204d11f5b8bfc8314f73",
"assets/assets/sticker/1714716322675.webp": "873256bdc4ec016d60af9eb1c627608d",
"assets/assets/sticker/1714716817608.webp": "1b9a1c38a836f055da97cde4b21d4aae",
"assets/assets/sticker/1714717588001.png": "7f01ec7829c8afb1c9587bd481bf5a00",
"assets/assets/sticker/1714717401187.webp": "2d9a6c8cb7901852389f022aea443749",
"assets/assets/sticker/1714717664365.png": "9207be97ce60559fac265b334e3c937c",
"assets/assets/sticker/1714716777470.webp": "37094994ad17fbfd04935ce6aead0c09",
"assets/assets/sticker/1714717634248.png": "424e2d1fef60ec5471b1b7ae7bfc3788",
"assets/assets/sticker/1714716429119.webp": "481643b7e5865b81539cd6aa9a5e80ec",
"assets/assets/sticker/1714716499752.webp": "297a87874c6715ac98165e7450233568",
"assets/assets/sticker/1714717481543.webp": "51869042b69532cdbf30b34e4b4f1613",
"assets/assets/sticker/1714718039996.png": "f00f983cb08be5ffdb131359bc0f7c3f",
"assets/assets/sticker/1714716742687.webp": "9e7d35364c65b36ebf3756d5270fdf6d",
"assets/assets/sticker/1714716984040.webp": "49b49cccc679d7a65579c9792363ad47",
"assets/assets/sticker/1714716648395.webp": "2db27083fcfaa93716fd0f118b881f66",
"assets/assets/sticker/1714716658008.webp": "ebc68423080d2c954e95e293e12bd88b",
"assets/assets/sticker/1714716979152.webp": "a443d0864cabf4cdb35f3cc26364f9dd",
"assets/assets/sticker/1714716238288.webp": "417fe1ef7073d93405d351f4173fd287",
"assets/assets/sticker/1714716562054.webp": "7a649d0c10a7c28c385d166d39029753",
"assets/assets/sticker/1714718038538.png": "791ec09e486595b297857e8ec1a16e81",
"assets/assets/sticker/1714716452879.webp": "19f54e6508bda7bd3bf2c8ed0895149a",
"assets/assets/sticker/1714716716605.webp": "935282d40a256c7d892386040e582611",
"assets/assets/sticker/1714716957835.webp": "8e1ea8c25100980e9afc88e50e241a24",
"assets/assets/sticker/1714717455418.webp": "8a520ee1d0d1f8bfc4ffa6eb709705a1",
"assets/assets/sticker/1714717127223.webp": "ff73a35a1fe6d29e3336fa842cddaa81",
"assets/assets/sticker/1714716314647.webp": "a65205b9aa0bb61575b5010c791144f3",
"assets/assets/sticker/1714716589147.webp": "ab1fa0e1dbea406a1225f30e0b309924",
"assets/assets/sticker/1714717493577.webp": "6ae1514d675d2f211eb04c097e33c71c",
"assets/assets/sticker/1714717594035.png": "7ccd88643780cb70f9a307200a0974ec",
"assets/assets/sticker/1714716950810.webp": "ed99f209ed6ae1abae7f2f687b45c1bf",
"assets/assets/sticker/1714716655159.webp": "e375a7eb9893c171cbb453b5af588ccd",
"assets/assets/sticker/1714717807653.webp": "80ccc7637421fc9c765ae46caa3ffee5",
"assets/assets/sticker/1714716492727.webp": "9ed2089cca813000edb1e9a19a055c1a",
"assets/assets/sticker/1714716612265.webp": "d449e1c6de8b16c72c2f3518de2f0583",
"assets/assets/sticker/1714717176420.webp": "d49a1d84703a1955da2880c47d355406",
"assets/assets/sticker/1714716383950.webp": "533e6849de6300c214229ca696962e8e",
"assets/assets/sticker/1714716234155.webp": "d7dc919cc3bfeb7fc18f605fb7e9e51e",
"assets/assets/sticker/1714717859860.webp": "06dee8e972aa2b11b8e1df3ce87e89b4",
"assets/assets/sticker/1714717475481.webp": "5f53ceec55d25b6f8b257940b15257e7",
"assets/assets/sticker/1714716234336.webp": "4db0fff0a02dfc5a94ce5c82d2fa4fb3",
"assets/assets/sticker/1714717499595.png": "84041f4bdda9f94d5e543dbdb6a22526",
"assets/assets/sticker/1714716482739.webp": "7924a53086a6c56293511aedf5ea3026",
"assets/assets/sticker/1714716798534.webp": "d8d39df6fe3ad7f5b94c27b7653d5339",
"assets/assets/sticker/1714717522716.png": "cc4abdf68ba6a61c24981c14d05ef2d0",
"assets/assets/sticker/1714717981297.webp": "c45c633990da71325c1096bf19dc4a3d",
"assets/assets/sticker/1714716462357.webp": "c24d98e5014d95b4f56cf2b515d6e91c",
"assets/assets/sticker/1714716458104.webp": "ea1c86db23e4d2ca4b3d206fb60ccb48",
"assets/assets/sticker/1714716755986.webp": "3cec164eb7abb917266642505bc7c157",
"assets/assets/sticker/1714716475183.webp": "b89e149e0cd3d46c3bca54144e47948c",
"assets/assets/sticker/1714716465363.webp": "bc54bcd58af636654d1657dc00d1db55",
"assets/assets/sticker/1714716710583.webp": "47460e0fca5c4129553d7073cf411d3b",
"assets/assets/sticker/1714717022838.webp": "c189fa88ef4dc7af242b6587699c6752",
"assets/assets/sticker/1714717848822.webp": "08dfd9d88a602e8fbc26f156dda570bd",
"assets/assets/sticker/1714717461425.webp": "86b5f85f234679ac22b67afed40accd8",
"assets/assets/sticker/1714717078046.webp": "1b184da959d7a4d2d4c725091b5c4dcf",
"assets/assets/sticker/1714717957196.webp": "8cf34102bd10a997edb845794fa61ea2",
"assets/assets/sticker/1714716683487.webp": "b7ebeb7bfdc0988daa9d14631447ad7a",
"assets/assets/sticker/1714716235303.webp": "10b85d4fe67c64a6fc82911cf51e4beb",
"assets/assets/sticker/1714716986127.webp": "78cc0552a3a35e6a93bb1673ffd21fbd",
"assets/assets/sticker/1714716651487.webp": "f65853385d22f5323b39c3051a08ad27",
"assets/assets/sticker/1714716320666.webp": "9d4b1f4e915bf662873209012f0277df",
"assets/assets/sticker/1714716338755.webp": "0b9d106043a7f892d34139cf502511e0",
"assets/assets/sticker/1714717937126.png": "79e1f259050b9200b108557e614e9b98",
"assets/assets/sticker/1714716625303.webp": "eea7a0a65695b1ef5537a4fd1ab1acd0",
"assets/assets/sticker/1714716676455.webp": "5878d4e6e4be0d690c7e760dd6a060f1",
"assets/assets/sticker/1714717528731.png": "bd60834f22189cb10b649802a5fe65f5",
"assets/assets/sticker/1714717646295.png": "4800c96881949e967e208d600ce82a3d",
"assets/assets/sticker/1714717422281.webp": "96ea51a1808003e50b61c29182356333",
"assets/assets/sticker/1714716334736.webp": "a1ead5994519eec035cf310aabd8bafc",
"assets/assets/sticker/1714717106143.webp": "24c9b25444c115cb4b6614f40d9be924",
"assets/assets/sticker/1714718033520.png": "0ff240fac1c5db694ebb2eaf919b8278",
"assets/assets/sticker/1714717422282.webp": "96ea51a1808003e50b61c29182356333",
"assets/assets/sticker/1714716249310.webp": "ed0021838eca36e946561f0b21c0f714",
"assets/assets/sticker/1714718015436.png": "db6c922e13ade982f817085dccf2f17a",
"assets/assets/sticker/1714717388138.webp": "69283f224b1b991750afe6410eeb14f6",
"assets/assets/sticker/1714716730640.webp": "76e1bfdc634127f7fa90c2b4a9fc1f91",
"assets/assets/sticker/1714716972169.webp": "8138ea8e3f6dc433f6312d1bee21fbd9",
"assets/assets/sticker/1714717957224.webp": "79e44a49677f7c938c0113a261a5af5d",
"assets/assets/sticker/1714716984041.webp": "49b49cccc679d7a65579c9792363ad47",
"assets/assets/sticker/1714716358857.webp": "e86f3d20de739754c08dc59abb9052d6",
"assets/assets/sticker/1714717944149.webp": "09f93397907b99c7cf7151c97b03b02e",
"assets/assets/sticker/1714716703562.webp": "e354e0a24f2dc42c4abf791a64409726",
"assets/assets/sticker/1714716303580.webp": "42ee686b35850a0e1480ca6be7f89067",
"assets/assets/sticker/1714716736673.webp": "a4a172e2b875ed38301def92a574ce66",
"assets/assets/sticker/1714716344786.webp": "36f4a5a89072b0662bfea89c2a58681c",
"assets/assets/sticker/1714716362866.webp": "f79f8aa6bc3f7d7fbee29f6230042506",
"assets/assets/sticker/1714717217574.webp": "5b61dc3af75890b24129e2d3214a8ad0",
"assets/assets/sticker/1714716834669.webp": "318693a5e0afc256deef0b8a749935db",
"assets/assets/sticker/cat_mucsic.webp": "009f7c4503b11c87d8f19d763cb4b3d5",
"assets/assets/sticker/1714716409054.webp": "4826d802b29e314ef3c14c1cf1f6827a",
"assets/assets/sticker/1714716618274.webp": "0e44bf9b1325237320f9e395195b3f39",
"assets/assets/sticker/1714716473587.webp": "4779769767bfc1e35fdb548cfd6a360d",
"assets/assets/sticker/1714717658337.png": "4800c96881949e967e208d600ce82a3d",
"assets/assets/sticker/1714717837773.webp": "9175273b6aa8e8156a5c13a506177e45",
"assets/assets/sticker/1714716484936.webp": "a8539536204572ab67b21882be7bab8f",
"assets/assets/sticker/1714717545822.png": "5aba41d1b3d1511f5661adb34b488402",
"assets/assets/sticker/1714718027495.png": "7f4c44c7702f461350d238f4839957f8",
"assets/assets/sticker/1714716373907.webp": "8405c533a6c04ddfe359b070c520e68b",
"assets/assets/sticker/1714716435144.webp": "a46fe4a795411e67893c41c3ae6a9f7e",
"assets/assets/sticker/1714717931102.webp": "fe0a64079ebdf46065a442c38d2e2ae8",
"assets/assets/sticker/1714716342767.webp": "003d03a8ad989442dd3e121ca4d8c6c1",
"assets/assets/sticker/1714716278465.webp": "6b57560524e657b3fc07c3dae4977ef6",
"assets/assets/sticker/1714716381941.webp": "d40381df2329d26c12469c26b305d621",
"assets/assets/sticker/1714717628220.png": "bc6c766b1da2cb7991c8e9ec97134565",
"assets/assets/sticker/1714717113169.webp": "180157c461bd807d9501fd18d0ad1ffe",
"assets/assets/sticker/1714717652316.png": "b61fccc1843b226955253e1455b7b2e7",
"assets/assets/sticker/dog_dash.webp": "13fee3494ad0db6fb97f0fb0e1dacbcd",
"assets/assets/sticker/1714717395168.webp": "a6c2b678c387e9821323c8b72a4db1f8",
"assets/assets/sticker/1714716259365.webp": "c18955a1d45ccfe41df2857d9eac9421",
"assets/assets/sticker/1714717998348.png": "e83704519d507bb9bf68ad3374f7cf85",
"assets/assets/sticker/1714716535970.webp": "cc5e0bf899124f9796ba2bb3214e5934",
"assets/assets/sticker/1714716387978.webp": "1464dc0b1674d8a19c589813e9194582",
"assets/assets/sticker/cat_with_heart.webp": "e0dfb4204c81d6e6f583744e69ca3428",
"assets/assets/sticker/cat_good_night.webp": "9a7fc0da5173ebd6b2c25c567ca3ce60",
"assets/assets/sticker/1714716403042.webp": "172eecf64697401768b1ca26e0cfa021",
"assets/assets/sticker/1714716479066.webp": "19f54e6508bda7bd3bf2c8ed0895149a",
"assets/assets/sticker/cat.webp": "7b4adf41773e8618f6512f1ad59bd621",
"assets/assets/sticker/1714717510643.png": "db7b2a29a29d1d05453b93f8a1d2453c",
"assets/assets/sticker/1714717557879.png": "78010a0804a9de02ff2abf53c8a7e4b1",
"assets/assets/sticker/1714716308611.webp": "8b61bfd184640950d892896e01d8a6d6",
"assets/assets/sticker/1714716312635.webp": "f33581ebe24f07450e228aace284b362",
"assets/assets/sticker/1714716310622.webp": "44646f8c3fc4dd888749221d666437df",
"assets/assets/sticker/1714717640275.png": "7c19f6479aae03619d6e96281d3192e1",
"assets/assets/sticker/1714716582132.webp": "d192b9147d73e1afa1373d3430bdbc0a",
"assets/assets/sticker/1714717196477.webp": "ce70295ac2baae1929bb475a9c46038f",
"assets/assets/sticker/1714716316659.webp": "22073c731316f1247fd3995bf99cfba7",
"assets/assets/sticker/1714717245656.webp": "850e81fc775763dbd9cb74237e758464",
"assets/assets/sticker/1714717600058.png": "3c79e94dd3fc88c482b7b7502145c3f9",
"assets/assets/sticker/1714717575951.png": "f7874a5ec338ecebab824e369cc71871",
"assets/assets/sticker/1714717787576.webp": "23287113ed10a210c130883b199d6ef5",
"assets/assets/sticker/1714717203517.webp": "2d30dd678acfddab0624119c1a280fad",
"assets/assets/sticker/1714717677536.png": "ccaed0d4157b357b70ce822d090c749d",
"assets/assets/sticker/1714716416079.webp": "7421d981f4269e99285746e610c1a89c",
"assets/assets/sticker/1714716389984.webp": "ac17442060d9c303ac3caae31d04db4f",
"assets/assets/sticker/1714716575102.webp": "500b76b351f40d3dfeb2fdb934afa782",
"assets/assets/sticker/1714716350804.webp": "8473e0d0e2b67f3858ee077a786b1424",
"assets/assets/sticker/1714717210539.webp": "9a97aa7b3a5e8a5705d26ee6bfd3e57b",
"assets/assets/sticker/1714716811580.webp": "b30f909466b708154f01508e6b927758",
"assets/assets/sticker/1714717259695.webp": "010c14efff0bd279ea6d9ac98252f5bb",
"assets/assets/sticker/1714717120187.webp": "e1c4d02e11a4fe5e9661699f9f620e7e",
"assets/assets/sticker/1714717505620.png": "edef5059e20aaf698ce0d7b3d4f3c896",
"assets/assets/sticker/1714716273433.webp": "52b7cfa2966e03ce584de2a2496bcc6f",
"assets/assets/sticker/dog_hello.webp": "43ec429b8d6baceea35f8836ad5e8af8",
"assets/assets/sticker/1714716569083.webp": "7d89b2ead37ca3446a26fc1bc30b43d8",
"assets/assets/sticker/1714716486081.png": "889fc030fb90eb3868c87d7353e2e8f2",
"assets/assets/sticker/1714718044582.png": "bde6ff3d16b7c9027d4c6fa7ea7a4fe4",
"assets/assets/sticker/1714716544977.webp": "663c5264255f79a5eb410828e61b8066",
"assets/assets/sticker/1714716460233.webp": "ad231e6838ca9a87f80f16c0f37c1933",
"assets/assets/sticker/1714716790502.webp": "39c53e6d85ebf0e5229cb6b607026d3d",
"assets/assets/sticker/1714716477786.webp": "5cf37682565740b8d36516ff206e198a",
"assets/assets/sticker/1714716784490.webp": "c86d4ec3149d2876dc1ffcf825646442",
"assets/assets/sticker/1714716364872.webp": "0395271582700a62e1c999a064f3f7be",
"assets/assets/sticker/1714716550004.webp": "ce9aae39e5a299db2b8c51511c16d97e",
"assets/assets/sticker/1714717813672.webp": "f349d1817fb25db545c8ffbe417d6c71",
"assets/assets/sticker/1714717428308.webp": "fe3ee19c1ba5a61ab77b7ef303c64215",
"assets/assets/sticker/1714717139273.webp": "a667172784a669d1b6f73ed73aade6d4",
"assets/assets/sticker/1714716486082.png": "889fc030fb90eb3868c87d7353e2e8f2",
"assets/assets/sticker/1714716487147.webp": "37fd476cefabbb07a4534317449efe79",
"assets/assets/sticker/1714717606115.png": "26047d322d09013bb930fce7d671666c",
"assets/assets/sticker/1714716377918.webp": "87daf3152f35235e64d4e9974326a793",
"assets/assets/sticker/1714717907003.webp": "a5686786e587f39199c4849a5d324428",
"assets/assets/sticker/1714717099124.webp": "82467bfc08cf6dfea2f0a7546c0bb09d",
"assets/assets/sticker/1714717539795.png": "118ab44ca92f75bfe19dd53060726e3e",
"assets/assets/sticker/1714717551846.png": "c99c15afc2a108add5188a10c6ae7fa5",
"assets/assets/sticker/1714717831748.webp": "d891832348e609b1f35cc78d42abd82e",
"assets/assets/sticker/cat_with_box.webp": "2c3f489be76cf3eb7b6f5ce40b11d4b5",
"assets/assets/sticker/1714717416260.webp": "3d7e18b311906d696951c4797913009b",
"assets/assets/sticker/1714716244291.webp": "1cd6f8faec8f6bf05fa6918e1e9feb45",
"assets/assets/sticker/1714717050945.webp": "a54a5b6e91a248e521dd497e8b72bdba",
"assets/assets/sticker/1714716379929.webp": "702d0e0f878ac8298bd8c62186186cdc",
"assets/assets/sticker/1714717826724.webp": "cf1bdc0d477336b9c96cc2dfdafe772d",
"assets/assets/sticker/1714717800631.webp": "db801c70277ace827f9aa2738a6fd1ff",
"assets/assets/sticker/1714717628219.png": "bc6c766b1da2cb7991c8e9ec97134565",
"assets/assets/sticker/1714716653747.webp": "2e6fe206bc3595a6487a69b51211c24c",
"assets/assets/sticker/1714717162362.png": "69ace56a2b07604d005c28f5b5c815db",
"assets/assets/sticker/1714716642367.webp": "2ad47335a9ada84441939cca8ad066b8",
"assets/assets/sticker/1714716354834.webp": "e0685c564d9cc2a7330cbf9f8c700eeb",
"assets/assets/sticker/1714716637350.webp": "854984fd5b0f29e8b0db4ec63b3c0e13",
"assets/assets/sticker/1714717612145.png": "ccaed0d4157b357b70ce822d090c749d",
"assets/assets/sticker/1714717581981.png": "178bf6ad94ce074ca8ba885fdf62ad7f",
"assets/assets/sticker/1714717950166.webp": "9306ea0b8e4b72d02b37af706a939ee9",
"assets/assets/sticker/1714717092094.webp": "70dc591f757c49cf17bdc7826601675c",
"assets/assets/sticker/1714716524853.webp": "d8594f883d1bf6a29869f1b5257df067",
"assets/assets/sticker/1714716324677.webp": "2f1f676a1f99cd30ed7012f2a88b6ae8",
"assets/assets/rive/bear.riv": "6a4a1058bcfbe0820df6d23c15c2990f",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.json": "706c2989fb0dd6178be410fb375bb442",
"assets/AssetManifest.bin": "d869938209907bad5bee3573b7a21415",
"assets/env/prod": "74a8e68c0d78360d3f0ed2c42ce4843d",
"assets/env/dev": "2f27b7e7b5a5a20312d50d117d2620af",
"assets/AssetManifest.bin.json": "fe9b4c19196e82c3731063f582d30372",
"assets/fonts/MaterialIcons-Regular.otf": "4ab1a1f327e35ceb1f4d94a894e8a6a4",
"assets/NOTICES": "da4c4be3fb722683d676563848d01780",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js": "4b81b2341c7373f9abb4af60b007e1b2",
"index.html": "2eddb195d9b835d1dd5dc105e73bfdfb",
"/": "2eddb195d9b835d1dd5dc105e73bfdfb",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"favicon.png": "74c1d65461a77a8c31f7b0c72a4f9cfd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/packed-refs": "f59e9865679b8ead5f09124b1ba3a1e6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "d440da9790015475d0141627c0dfb8a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "be864d5494ee3e4d807f2ebc3dcae4d5",
".git/objects/pack/pack-192dc32344c457a248a42cf9df43fcf47b9a63ec.pack": "d259f66382bb4660e76163cc11f0024a",
".git/objects/pack/pack-192dc32344c457a248a42cf9df43fcf47b9a63ec.idx": "0e86ddb707c29ebdf5f215941b0f65e4",
".git/objects/pack/pack-192dc32344c457a248a42cf9df43fcf47b9a63ec.rev": "6f0d6ee8415f1f3968c5d14cad026cee",
".git/index": "95ab03c63c647a40508040ee472196d7",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/logs/HEAD": "a467293e38d961d00ff6d3eec3d808bb",
".git/logs/refs/remotes/origin/HEAD": "a467293e38d961d00ff6d3eec3d808bb",
".git/logs/refs/heads/main": "a467293e38d961d00ff6d3eec3d808bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"icons/Icon-maskable-192.png": "a335f4addfb9c7592b3937617566e059",
"icons/Icon-192.png": "a335f4addfb9c7592b3937617566e059",
"icons/Icon-512.png": "400be9e5dd09ec7fece30915c41a98b0",
"icons/Icon-maskable-512.png": "400be9e5dd09ec7fece30915c41a98b0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
