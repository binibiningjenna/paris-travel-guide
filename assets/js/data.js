const cuisines = [
    {
        id: 1,
        title: "Croissants",
        description: "Croissants are flaky, buttery pastries that are a delicious breakfast staple in France, often enjoyed with coffee.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4YdzMwZcnHdW84Y__CXlGSVUOlfS5SxMH2VbkBfwfBsshuQhs7M46Xq9tV2dBHdFB1MomWy99ii10ze3ACtB-EJuhykdcp9YepCg6dUI4KlEboBBxhQp_VysIFVqTbWXH_89M5CRB0w3hLT7UQZQ_oDsCsMqW26EckyBAVVou2UqC3xmNguKoqAlpG0Y/s320/Croissants.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinC3wapLUb1cdMJWGCz3r9Viw8LZaqFbUJ9mLX9KEbjfTyS6EEt1-BvW68mVI5TIW5B6hq_yKn3w9Aw1ecuq0io4D21WFCFkVVje0U4YUUfNvZ6gDiFgblwltPmSRtlaHNaJQii2xecGX5T-K0wtHp7G9XkDygzfG9uJHjgLnA30o0XXZ8h1EcmNmpSfg/s320/Croissants%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrGb3jNlt4OUgqSa8qocGnbSYJjGNCUECHI7FJ67126nOk2Fb1n9igHQAY77dGBgBr5NPqmQRy8RvogyGQUVkeWz8cYiHMOk_DXu5HtCyvaq0shL7IeZAES89l-IScM9R1lljXWpqoo8G6rgJ3_jMnJhaBbPvVkWNMZiVgfyHxHbPkMtZcj4GHgBjMRGM/s320/Croissants%20(2).png"
        ],
        rating: 5
    },
    {
        id: 2,
        title: "Baguettes",
        description: "Baguettes are long, crusty loaves of bread, perfect for sandwiches or enjoyed with cheese and wine.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcoJWswfEozJXjje9XrOReT_BR3wAWWrArzCXg4KuQu8D5me8_QV8hiUpdgBxDkcPiEgnLC8kgE7lo2wbUnueangBnDBxT83HCMxZ29zwfR_Y72icwb4agsVJ0LrsZ8a3AUbpWbVydyebZ_sbYxniFzHKuglSp7NIP_fPJevAMadftTrLdruZ4kWw8aWk/s320/Baguettes%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhp20S-BP6XPc6Zv3MlOziIdx2gB4R3Rs8EYX35DyY6JArLyNQ85yowH992sUJ7E4rq6IrRsH_Jv2gkd7qt9DgitgCpYkSYdFz0tenLoNCfZvnmYePZWOChnrYk4G3-KcpPzlHpm_5d5d1WMrXqw220gviQtJYJF0aqq2yV_h8jy3wazxy6tvYlecfx2ac/s1920/Baguettes%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-d-iqtdY84t4JeqCdDdvJHybeLawpyxsHoFGIEH_RrN6BRTX0yInV2TLQmDdAwnBz6i_7n4j3vZks53XhjT2dHtO628iQKv5pBqNY5qPSRPgPDpmbRThx-vctArS22e5s5qU8FrVSTE-_pu0KEcsBj_7N4GOS_fOe1RYA7CzsPjwbmXBmcBsiDIs8vZI/s320/Baguettes.png"
        ],
        rating: 5
    },
    {
        id: 3,
        title: "Macarons",
        description: "Macarons are colorful, delicate cookies filled with cream, offering a sweet and chewy treat in various flavors.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwCmIHiUwrMEDY_iCtO1YwXLbTKe47g0hHhyQF0wvBSmaDi34kaRY5wtkuJj0X_E8HlAOU9g6V8f1GczI4irks_dVHjW4kd5b09PxDHfCYOd_gbuZibUd4MLpb5Z6Rk_x9SaP2v5vk_scRdpE7nKdQ-NnKwW7gofktFQui61OSy_6PDQmu-2asiEV1mAE/s320/Macarons.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs2ILAr57ueSkNQJ7LA1v4j-rIN2c739NHkkm7xrOTPoejzKU5pIIdVzUjXLkuFOt79E6t3AWp6eH_kTebmaipxLg3XThr_aKHwrV5vn2CmVsTzjKvUx6DyNZchpIUVri69T1RkSl0rJK1Fc6FcdbmE_rJeOiWbBIsIND6Qlx1kzfprR5PIvJv0AM3ZaY/s320/Macarons%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipGvQjauvi2CaRgyAcQD0iXx2dE60yPA3nLYBl7zj_jHu6GKVbfkFpl_to0BtM5flCp3tYbO01jt4xHxsvFAZaCX2MEYyxTCGDhVSiJL4RsObXqsaK0e9n3hotdYmMW8jFuGbznJTCufDxF4wXh48AnaHT8xLJwOC0NOpp2otdEjyqXSWioMz-rfysJaY/s320/Macarons%20(2).png"
        ],
        rating: 5
    },
    {
        id: 4,
        title: "Escargots",
        description: "Escargots are snails prepared in garlic butter, a classic French delicacy that many adventurous diners enjoy.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiRrkg8lenIP2n2kD44870BIoILfpzhoB1Dxe6ewUIFsydMuN9eO9y2Px3UdxmSNMJlY6SuBC90b6alLnADwM8BREdPWwJIr1CoZq8mA38tUJPv2GXXGSlD5KChs77TZ8D72TOuQBbVbl1z1ucY3UAtEdJ-Tv49F0cl4_tT7vKZfYM5gh1CYlFIb85C_I/s320/73.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNoHsuOqlpURApc8pyyXyqV2a6S-iLJjMqWTGSrKiAt5QIIL9gRuk-QRNlpoHlBZRZ6Tx8hgVrsj7ho5DvoPqbx8Gw3adWg0U8Z85jXW0eCB6c21QNfBiCNrphQIhXJePZsYok2w4WaqJr-80V7HZdeicjZ6sblWg-kZMInk_aZj9xJY2uKxltjgfGxXE/s320/74.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBvSrtpZdAkUb4YRQUEPf6yX4b064nvsOAhO6KG4FRKsIgapJtCyRQQVLY8BKuBOa4_DY8gXOEOYlD4qH3pbIjipyff9rcEbQMrG2rEy6bucHfH61TyrLByFwVa0zBhLaV69W8hRIwzkmR7j0Cr_K_TctvGxYGlX_wt4oo4WfzO2lfR3K6yNZy3GayDNw/s320/75.png"
        ],
        rating: 4.5
    },
    {
        id: 5,
        title: "Café de Flore",
        description: "Café de Flore is a historic café in Saint-Germain, famous for its literary history and outdoor seating.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8AFS-rgRddW1GJFILR0GoYI7XplhccML8dFWbUEyXYzKVdtpG0SZiHfEe749r8jiaI9IWgPyqXfA6xXS4PdI8xpGZdA5rM76tN_A6WX6rznBmaYiHTaDSxRIZwADv5I65ZDxK0X2WSq-9sN69P9Tq3Lixxo8Ryz-yVcMRC42XIo3UZtWFd94AMrrGH2U/s320/Caf%C3%A9_de_Flore%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7aaer75_dOxsAW9f1myvh56R1eKHVi2lMPw0RiaJ_HGVKM-0v7UgplEKfxPy_l6rpbkrc5cEADEJGIU3b2YsIO34FPViN4UAhz-LFkaZ8N89suGbE3TEScODFXhvczKXYzAr-s6GgGhtXc_Xyq1JpwOegSsfQeOX19PsNwCgIr47GBUdd9TMpEgZO0HM/s320/Caf%C3%A9_de_Flore.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXOFzoGdcTgE90uCDP6b7N6lKRUuRH4zbaJmW9CNUXTp3ol9dOzyetCOYdAJBYoXBOsfAsmpLIaxBBLa8CudSJ4Jk3ckNenZnUbKOSdf2tTA3Y7pE_5Ah_0FN4OoFcg4pOcAvGAUnfxv06AWzblfLLtjQfq0y0X-Nfe249fOz-vI9ycXydNQxUdgXUI9I/s320/Caf%C3%A9_de_Flore%20(2).png"
        ],
        rating: 3.5
    },
    {
        id: 6,
        title: "Les Deux Magots",
        description: "Les Deux Magots is a renowned café known for its famous patrons and vibrant atmosphere, perfect for people-watching.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpVfr3hhcHUBBYjrSBx-a3c0h6Hv4IB1jG3wIXPF-u7J0aZK5OZRZqx-8Ic15oTRoGNrbvDhWDelzmQRl4phsf9Grsc5uF-k8AKdgIAU5e7QyLArVY3uIu7sDFnjI8fPA1qfRjftauJTUvq18yFQXKPfuFlj8Nl88L32VFOAsCHka0NGuR82G2jy1gQ0o/s320/Les_Deux_Magots.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2AOoIbv-ylt2RgkUrtl0l4MXJgM8esOAsWaFczU1zpX9fBhiieLsksLV1osA6sIwPUbwwX4F0tFzB65pdB-M62Aj7tUS1ClqwQ_KTz6M01wqqrwsa_ETzi1cJ3KG_-a6PDqNMY8FWeakJcT5sJkwMi-g2FpvfCy2CWJGhDbNksqYkW8Sr-eWIkDrnOjo/s320/Les_Deux_Magots%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkW1ieMz5VymT1fzHeV0eoHFn7K4yM6VciIh7Nh7CbFQFRtp9UGSutJpB5NA2Z313633-aBSNGf3PkJPGWNTyPzNNrhjGmTezV5LkxlmGrb5xE7SDXIr5AVX8VyoV0RwCcyBQEuWezPkfReAMlHi_UdD2bMzTQkzdMNy59zs0LTpsdz7r5sI_f1EOx_Tk/s320/Les_Deux_Magots%20(2).png"
        ],
        rating: 4.5
    },
    {
        id: 7,
        title: "Vagenende Brasserie",
        description: "Vagenende Brasserie is a charming spot serving classic French cuisine, renowned for its artistic decor.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLqlBAqX6NpgMsgOTmf4plIcNKsw_gpJ_Plh1wFyeRJd09ESsxkOS1D4iBfmyEXJ8bCau8hlcstNf734dvNxGl1yyekh5FZxskE7ZZA79gbhXnjcdwVT8PJhSbHZJKTjyZex5CmMkBMI_GME80Cd--wJS47HIPT32N4RJzIYcCkMfwVVXwuS6DlpR5ngI/s320/Vagenende%20Brasserie%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioqzJ18hmZYtvnQp5eRg-G1cBbmqC-T2nV5XFytwxDGl-K6jqwABRBKSsHUd7cQ5JfXgNNZE6rZUoCUJEhfPTA_bfwd1H63p-2Tnc2FARQpa9msMz1VgCHdjUnuQ0CU4ybjbJp12Yfp0huK-HZShlErZsGpHb55Ee_qVm96r-XQKdjPZaMIsRDti0m2KE/s320/Vagenende%20Brasserie.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhitkiQpENON-sXlzEqi8ElfqMLKB7_Enp7ZIVr9_ed9LoNVpJfmmjJ3QUAULZT55StbiWVKD0xb_f7NkL4MV-6DUl7NbX4tvxGd-AiWp-Dp1pR_4zxXYK0xXTWqOENpNw3XssNQwUq1v_F9umEWDtlXl1PQnj0oL9T0IifZPakck0j4HZDVJcm7bpn3_4/s320/Vagenende%20Brasserie%20(3).png"
        ],
        rating: 4.5
    },
    {
        id: 8,
        title: "Pedzouille La Grange",
        description: "Pedzouille La Grange is a cozy eatery offering traditional French dishes in a rustic setting.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhshLylj7vuxA7zLr-TVPk31nJwWDVeBOuQ7KAAcWm5HV6x84svy1iVu8jfQDXgdAKg3iZvbLGECHVo_t9_EQlYM0MqvwTfDRpQ2m28XfS4u2uRBACazWddcUpy37jyIIfc2TQJzhVeZimB55L5DBAuXYwPDlX-CoCk5XaXnHna7dE1MMZyHWDkMRRR234/s320/Pedzouille%20La%20Grange%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnrxIXCdh8ZjK_dA_H_sucjSR0H-1z7GWaHKbRulYI2RXtnSKLMRzAKlPAh2UEKpS-ugIHrEYdPYn_6qgbG06utq0XVmY9I8dHeKJkPPwEgoApvNNdxZAfRpAZKuU0khhGSb9LNR8R8fG9A9lRHytKhTyZBax_tCBnIWluSoP95WydnG5vd3mSVhM8kxI/s320/Pedzouille%20La%20Grange.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfE3bp5xzo0qt36a-BN7co3ovwZqNaJ5RZ0KK1mOi0JSSJjeGvWHQG93eZ5EDfQwJHDhrx9R02ONj9rkcQgPYhsuWw17BGU2aZGupt97xQwlHY0VflrhfbAb-gY_jqLb6mXYswG7WEAeTVs9uU2tdoFtA00DrqMCPZmcfEByWCNK7nCIvY9Na8lsXULCE/s320/Pedzouille%20La%20Grange%20(3).png"
        ],
        rating: 3.5
    }
];

const landmarks = [
    {
        id: 1,
        title: "Eiffel Tower",
        description: "The Eiffel Tower is a famous iron tower in Paris, offering stunning views of the city from its top floors.",
        rating: 4.5,
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxKl14_S4OkvbWzNkYRRSvtie1wSggROhELDdhSEl83l7O9Og4lsZaY4x7KN8Y7JtWb05cljxXBUIgbhF3i5eo5d2Y8sQxqGDxPcRKDOF8NRyzzGa3TDUryntUGbj_N0dzy5ThFulxkQIQq7jjKykpM9SJKBL5ND3JXp90-EGMHdLWatXgTlc5ocj6KYk/s1920/Eiffel_Tower_2.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4O5v8CPSeX8lIZXsgLFB9PkkWWmeg78sRXya95Z1-LXWmiPPQ1ehZpg9XojZeCj5fa9I0Jb9cFOTj9J6BWm3MTwFsisuutV9KwNr9fKXG_C-CS9byEvPJPzvwy79DvoDn2GFnfJ5CE5jx4xupmxdwFEbJxN8-ipGbJHEAERsT4hXjTQj5WzJZgjfAB9U/s1920/Eiffel_Tower_1.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDIkVftEA-4Wm0A4HSWMZGBzVG89pFa9D4tGgR3iJ83o4jM9MgYUyi2c1hcR7xnBSDATA4OcRqsUxlbaKcXraStoxfROkdWhGhv6pVk7kyhI2Pj7Tv0FBd6fgMTXbmfF8ymYJChBCKgBdpBsjzD7_gJqLmRG98i9MAEHi-sdcmHiaw5KVDgbHf-SH_4n8/s1920/Eiffel_Tower_2%20(2).png"
        ]
    },
    {
        id: 2,
        title: "Arc de Triomphe",
        description: "The Arc de Triomphe honors those who fought for France, featuring intricate sculptures and an observation deck.",
        rating: 4,
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkT1iqluGVuOaHZL7_5clIybcOZwnFpk4p5oazz1zdNxIP-4vwR8SOyzSQ3_IDYtutB3y4vTEnXiWgkNO5fJAkcbVS9y4ULbqxDdyJTEjEgmoKRxZ186XaRMeXtA50vhrALLb3bZD663hVI-OivyGlOJN9z5UolWmSSMDUO33ARn7j8EX7djnDYMP0u8g/s1920/Arc_de_Triomphe_2.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWLiA7ifMAK4yQoIsVCEefkfMvO20F1t3bwnmKI95he5dDEgLQv_a-ppTViJRko0NgSDU4FD9HAhKzNjXWHyWwaQ-Fp_OOF7d4zFA09aFCxjimhZj09Pl0N75e5124XbYuhnjVdXWZwUlRSyuJMiupOLFhd7IPptbHSPkORA1TeMr9PbgBxgu2WilSMQ8/s1920/Arc_de_Triomphe_1.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTJXXGn8jjjGX6IKHGqq7O8d61MyM9pHs9kA5CELPxmJC5MSWftt_-1mYDIqiLo882DrWHiy2qvTgv9LaQhA3CrQRHltLLvwrXEgUO7ySU0gT6OFITlaIiinHkddyQrSX1k2Z6XSR_DjOfYAlzM58UNN36rl5m5N0do7groc881FDTx7gjxGnH-J1dMvE/s320/Arc_de_Triomphe_2%20(2).png"
        ]
    },
    {
        id: 3,
        title: "Louvre Museum",
        description: "The Louvre Museum is one of the world's largest art museums, housing iconic pieces like the Mona Lisa.",
        rating: 4.5,
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHJ_DVKoIqN_P1Y_OUbUKbs1Bgnglsov4H4SZNB9ZlyxOaz3Jl-G6RWL4c9-OABrpuQzhHr9v1AIFYv5ZE10gwqc4Th3mCnBEuYOntBco0YgPJX24aV9R5cx_ViNy2_wQY1kR3hl1lB2knxqKEOT5sDLvAYcGbiIgz9QQNAVXL897atfk7Y0vrtKMHdxQ/s1920/Louvre_1.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdjug4goedlNfONwVl4iUQtdPE989ZgXreLLUUlHevKbfqozH5FiY_sxzqgcZkQ9NbXliTQRMj72qQ97fkwWuRFUkB6zwDw6p-D_vD4oA7R1hLABZD9KnLonl2eIRAYIZ3e5RTxdRp9jeTUkAsGFlnuR4OOX7IP9IumcHpb_y_OMmtwfembgVVNGcA2CY/s320/Louvre_2%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicCT6J8pZIz-fslQJc9kJvLA6RSshccnRFgVf_wMX7R1elX_3PJHGtWwyhhc3wWDcyouJwIVo6JdGxARaQKntCP9ugjsUQ7zUeSRd7dkQJ3qL_mCLo39fFw1IPSpvhCfdGA1SVHnZnz5Bcpd7LTeU5jmbxWlAZcMznGN_nvVZH39TLfRLIBrUvUpSOvMc/s320/Louvre_2.png"
        ]
    },
    {
        id: 4,
        title: "Place des Vosges",
        description: "Place des Vosges is Paris's oldest planned square, surrounded by beautiful red brick buildings and lush green parks.",
        rating: 3.5,
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZAU4LrCJmayJJd0CCCO6cea4faI7DkCOkErYvdONgAWPPsGCFX5YsetjFH0X0nJSnjxM2qaNhcyHd3vTzRP7vNXbSUHy-97zbXhumCCbDjRfsMrfNrUbHg7OjmAeusukSFzMetZEDm-O9hKxxb2h74rrAIrsvXOS8dUccTLAkdSH5rkV3mh4TVZ_gj-M/s320/Place_des_Vosges.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbhEuTDWDlyNmHjuduWPqMnOa6XcnkFbsp4pzsyaApX9MOB3tIGjz0pwWeQmplbpdfIEjPdGseYpJVnM3sQDBLCnlDhpObDCks2PF3Xy8HJ4fF5-a17IFJklNoNrPEA3OoWUxl4FLUpIudeJUdQP1snGdh8dcN4Cz-DlgAZBAwqccq_gjHWkVHKPO_iF0/s320/Place_des_Vosges%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYyhsVu3bKZJAZhT9GOoZgWgEdsOQ2eYGhyphenhyphenKSQ9PmjcpfUQ9haQPgROk8NdkhMQNCrW79KmnvyLmKRc5nIqlj89q3HPjZUI7XYAawbiD52a-9hPk9t-cdQQCCjZXbm61GFpMJQJ4QPhHA5WUVDkMRkt93wtnQEDoEu61Xn25vNgK8teYUOK__hPVF3P7A/s1920/Place_des_Vosges%20(3).png"
        ]
    },
    {
        id: "5",
        title: "Notre-Dame de Paris",
        description: "Notre-Dame is a historic cathedral known for its stunning Gothic architecture and beautiful stained glass windows.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwCjphXP3vzVkEi0bt1Gh1ETEJSkdi0ILGB3oQKKbFA6mxFKOETSkUInMbJ3e_6WMdg1ZGlO86IsmVfbz86b7OM5hoqaot__fKk6g8fkKOUsbg6kxmzVkP6myzUrNDQWZW28UTv_fgpG1IG6oiZ-WIto07IgEoF83IHdK2X_99DVoaPwzAeRPqED18xKQ/s320/Notre-Dame%20de%20Paris%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6wRF_kFZ0d2GHQlc8nr3FRzbrjoCrecIr14U3QKWF1annzeTNAQb17-XUM1akYS2M8Tabc9KROMsTQ8nQ96NY2rd5vXSPoOwDqPlvL5LAWe-cDCyBGfIerzlJMmwP-4J46t9T6DZzNZWjk002Qe2tQ8MhQr5v-piU7qOIto3ok12NhmeKjUnDE2cjtVE/s320/Notre-Dame%20de%20Paris%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg61cLwW4gxL6-xnUvLZE7BLmdo73WOrUc1gzIxg-wpTU0quQ6jn9-d-d6z1j2xYPCZ_7DLPBbIQ9UbyQHf4zFTSQPHLRtWrI9WPI3iLZL7zzfz1JM_RhLKc03ryAdw3e-G_b3gkkqLh6YUWl3qRqaDO9SFLmg9rA1S-PE48l2tP8JhU3B6eSuhJPjJ1mY/s320/Notre-Dame%20de%20Paris.png"
        ],
        rating: 4
    },
    {
        id: "6",
        title: "Montmartre",
        description: "Montmartre is a charming neighborhood known for its artistic history and cobblestone streets.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMwzaq9KR_iPuW4X0_uz6DwQ1wHJ7ymug_1bUw184QOc8hO58Nn5DeyxImyhwRYxFIf7VHJ8Fa-KLMY8aXPOWH5vAakOrMHhlW0rKyNO1hDx2t0kPPCUK6YvZ10FpOEX6KxRUoSk4TVdiSEGapf_Dvc2-wBUVNnWKGlVOqdzmGxsGpa_IyDwTka0sD54s/s320/Montmarte%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieizRayuWtLvlfnd2qXPY0E6lM8_9MutZrwHmJA9odEnbpjyxU28LDHO1F07dIgpvusxP1bz8uAD5k-ofqwQ90mgGvKcCQNcUNyuM00_9TyvnKxpOeaNMhGRyCbkbZghmAp3AVgOjwz7yzCYlBA0XDzCsWIYolWKrYvZLV5sMwitvk-d0ULDi_mMl3lHw/s320/Montmarte%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGEcypbaOpYcJwFthxnbKIHL4yRzJkoWR470pKq4Ik-A94vrCx3z8s2ATh61ockIOqjhbb9-E9fAlYRGzvLTCh52e2zLDfyNKKlKZrql12nHPHwaUdfo4WtlzwJvMk_n-COvQ_mftMoT8iF_dZe1tD72jfADFxETwzHPj1HWKmMAMXlHvPnimo4c8Vuvo/s320/Montmarte.png"
        ],
        rating: 4.5
    },
    {
        id: "7",
        title: "River Seine",
        description: "The River Seine runs through Paris, offering picturesque views and romantic boat cruises along its scenic banks.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiokEtRmcVTVw6AC8Ivc73s0t1E6n0NP9kTdpZ-4RDyY1NbgT_f8tOiWkZoNjbyZZzJNjvTQO1lXsjcYmAIm9nOtBPNOFJwMqrAHTWzyN9_iGYoagKxlqx8HnTgn4wlzcD8oUjkm7YbrxGbGDxLyqBduRX1iPan5GShlcb8SPpk-trNusyL5ExDiGRQsVU/s320/River%20Seine.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigVVgHoQPXs8xkK2hLFlBLVkNLm6Yi32ibcg9BOjRGmi8AXP88Je01Xb9X9Q00_P7ysTRxM8gQXsWp32QBHm0sJtA_H7aB45ybK7PtCyZUEXR2xvNCJdooI0YOXetTnDXc97sY7HAgGstT-AosfJjpAyJIgOcqsKJcK1k7BZZ66QCEU1-fMcuThA6_dZU/s320/River%20Seine%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzodX3XnkU2Lj45Qx9SzBh__OvKdb1rHt-tZUAQBnDwvoeapj0OA3ruxK4PNo5UCOQNYov1_LZ5H-yBOjgX5QYNbXk1SBJYAwRrzZ9XbXBQwc9S3FHfNgDcCRnoXm-hJ-rGb4xJN7Hz0zkhLU8YAfe9irfUDPKeujW_uMbPx1lysMvpubCZOHPMRyS9Ao/s320/River%20Seine%20(3).png"
        ],
        rating: 4
    },
    {
        id: "8",
        title: "Grand Palais",
        description: "The Grand Palais is an impressive exhibition hall, famous for its stunning glass roof.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGhq4d-avi_qlmdQOCtzrGCWuToCwvHUWfglDkWcAvCwJrtdUYEo20KnAJEq4K3qlo_hzITNPSb4wVZwB4ZpMS_BQwnOlOIMlI3KFxQxHEfXtMrrpq6QCbDYa9LMYMHmYCZqyItwZnI16vTJxwsCE6UPamW53mkmnuqfVGQsEJ1wGM_T_uLkqSOIO6PfU/s320/Grand%20Palais.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM7tb84YLSTWakUqU1hav2H0nV9hMOQSKLeChu4QmLAwkxq1Zr2zRfTJM3RbtkKfwMFnW0RelQ84EU07Q5PV4o2B8Jow3CsappLtXO1kEqi7HmjmvGSmTkbNQ4qUi3tPVQuQyuM39kjBflQFXIo1hyrfXwazwggHRm23bMtblGz0ATteEfdXg3E8OrqEs/s320/Grand%20Palais%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-XdE36OVBphqP-OJw6IDIvvBQmvLsF040KroCe82iww0basDOJAvdpQXLpJYWmIE2-Ged7uEQ92Gv5QYvmtC3yhNpEMgUoVBVAP-SQ4sb55AiI-FZ5tyGW2dWBIo2DgVKLwVL0AO0A7GvS3i22EIkdEszpc8K4aiNSu7RTKJgHxLOXu84g1n9WmMii0Y/s320/Grand%20Palais%20(3).png"
        ],
        rating: 4
    }
];

const parks = [
    {
        id: 1,
        title: "Luxembourg Gardens",
        description: "Luxembourg Gardens is a beautiful park featuring manicured lawns, flowers, and fountains, perfect for a leisurely stroll.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6QfOAssKtHRCYrKX6m3SwDId5sAcvTr5pdVryRUlfq25diCmqwJ1852YHpde4nt4LJXOaUNBUgcTrKJYE07bHDzLrJpdYhTDkH6WRV6AMwmEdE_9vn98gUZtAh1bviMaSbI0lp4KbWkgPC6naHIISNask4oni8e8ca2of-ZnpLs1R3oSNBAhjAa1pNGY/s320/Luxembourg%20Gardens.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjw1h_qWJyj5HIDxHV59fSpBWtUnTpx-ATrJ4jwyBkmK2Af9yrKQquiqz8PbFhl2_lOe8mnTPV1ESfnrxtvBzZzApExUlfeWXVvivmGsuBTh2vvCuINFKdDIrAjgObbGoo_ob09CLekjewLxscPsGZGlbSMOik8M3fJHWE5C6sbnVaGAxrRB3_livoLW0Y/s320/Luxembourg%20Gardens%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMXFs62SxBxk-UJtbklOgtQ2Fq7oXdhmbnKvwIJdMvDzE5R3HWjnnbdG-CLIae2A-_plRzj2e9ixyAbkyyPQKBR6o_8UDJHxBTms3olodA6psbELhFCQv3nYsI0QXOJmnhhb6CRr9eQu9OnEYPQse73MTZ_FJ3qCZ1pgxwsjjt0_7Pp6UcR95bFznGiYw/s320/Luxembourg%20Gardens%20(3).png"
        ],
        rating: 5
    },
    {
        id: 2,
        title: "Jardin des Serres Auteuil",
        description: "Jardin des Serres Auteuil is a lovely botanical garden showcasing exotic plants in stunning glass greenhouses.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4_y9a5hcgYF1rd9Xsg1rdsVB71EiYQcOpyOkVnYwoJ7938H79ekmDjxZmSk3ZM4OeoUyyFblM8RnfKdw5ARdTb4AJ9zodqoi4Xt7Q9Xm8fM6NWhLhhjAWp57XJVuP_Gtn5XtD6yOZ9kj5GpHk_7xEJgG3erpQWZZ64M0Y20elCViS7YQfmSyAd5PTJNc/s320/Jardin_des_Serres_Auteuil.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxC8OBE3DJ_d4SyeE3FovUSjKkFpFT8Q0S0Ql8cyXKgpLvC32f9_VRvIukx9oAnJzvQwtCbrUwyU2-2giWie2rAGRQh8SferHGQdHtypLJQQpqydoVkWo6DTbwYsy5wus-HTYcN4yQzC8a2-TuA1Dg9ZiwdFProo8eME3F5z4HTPQzjifeP-Y33JoqZfY/s320/Jardin_des_Serres_Auteuil%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4jL3C870edYd5KpdMkHqVM7dRpD0eT1RGfibKb4GqRzXQoWRRcPPDLyYc6k5ntj4lJADAj3DDbdQsRCVKNunm4PERdSoaKTTTJDrCDYxU3ZRVcE4L7efizqsis_p_NQuec1U5DuD_GWoicfNKPYfQHBDZ3EYe2diWUtbv6Z33VGx3W6wLmIMsdbzILhI/s320/Jardin_des_Serres_Auteuil%20(2).png"
        ],
        rating: 4
    },
    {
        id: 3,
        title: "Tuileries Park",
        description: "Tuileries Park is a famous public garden located between the Louvre and Place de la Concorde, ideal for relaxing.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH0nsWPFtf8nq40e52wHEkOH7B8nhnNwfveEH_DSEa0QAAMaHClZSH_ugnBfpFIsb5t2M3kue_1db6niXGdm-Vp5HMiedCsSWYcpCvSaGiElSXUZuwhagUvUdzaWyRf3kyXA4Engnn-G6ywmMTG_Q8uKjGMzHZJKQz-NMtB6qha655M2hvvBGSWCE0EYA/s320/Tuileries%20Park.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGVZrZRNurPQFGa4CuPGare793nLCoMuuWekSYrfRoWI84qKOnYtMcsJu6tezEebVAxCubHKsbQ4AjJgUHAa1wRlNHBcLzX9Kn9haYLhW8SACYDgzA7Fk_Zdf8r1x-OToSkEQgWiaZB1Rsc-8QGIf7EweVfrLhDOGOH41qZGBJeFQ4CPLqWDgCVYx_tmk/s320/Tuileries%20Park%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi0C6IZeXpvwqK4H6rmaCDqApQbD9q4JsnB-wK2rGAzVXPn2FCu3jJeAGbyhhkDtGUlZPZACLE2vlYx2UAiUwVMnz7K3I4Xlwh7IrLSlWI-KfV1bRKIWz9qVfH7txulFmD1UXGoiyky3whi9CAIApKdqE_ykR0Gy7KCswBPhGACoMUiRfzYs1fFvq8PVI/s320/Tuileries%20Park%20(3).png"
        ],
        rating: 4.5
    },
    {
        id: 4,
        title: "Trocadéro Garden",
        description: "Trocadéro Garden offers fantastic views of the Eiffel Tower, with fountains and sculptures enhancing its beauty.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjCYMMMGGNi-ppyZsR2hcEE-grmfxAVGZLNVGqiKL3gpEgRWpHNpMoJ486M5sQFl8TMLHC85gESoxRfVwVM9DgfR2UMY2UzJZaelREYm6otbNPvlqb4bxmhlZOmXfT8bXsPRzJxE622ncxj0inxd2aw-Mk5qD6mdQa7Tj6HyvtXjqPNXolv2WwYW7lSIw/s320/Trocad%C3%A9ro%20Garden.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxL0EjtyMOStflfAXz93N-z7Z_Wx2uvxoePSLiamOait_kWhOpVSl-wt_PxuJbihJXR0Y4LeAFl_l7psjl8gYGCNE65WlAAnoxELM9c89qGsdqSPjtpUSFk6RXNn2jshJ5YTCafSA_kQBDgyvOAkatTZNf2U76V_nQ461BHE5Ryls7l24M242zUzcucKA/s320/Trocad%C3%A9ro%20Garden%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDreDvgc4MS91MJ7y1z-ikd8LeQx-jgZ6ImyetiZPjhoBDLzXkCMIxIiBXQJDqllKc_9HAF6qVKQMH9dUga1WVLVJ5T1_2mRKtJKU3Vj5e6GSJKIt4fUrwMlV7j-8-XBOCo6J2yBf-HUTWFw-uG6-WNQ4ULXTLkFEUKazuAF_UqEZNnSiMYWQ9APhIMAk/s320/Trocad%C3%A9ro%20Garden%20(2).png"
        ],
        rating: 3.5
    },
    {
        id: 5,
        title: "Champ de Mars",
        description: "Champ de Mars is a large park located near the Eiffel Tower, perfect for picnics and outdoor activities.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAI_9KhzfwmKzv0Z7ldkGjhmW_EfjytcmE4oGY0y07v3xbuouwO9K9GZQjmJLVwPaJkEoJbfA2CPxUU_DKj6XtOJpAZILWgAlHCluHWy_y8ygqaqogV3t00mCqi2hDKaXVpvfMt5qwi9kvStWV44yTMHyY160Aql_icVlDOEO9ytMJ_zXyyrUtDMIh_Wc/s320/Champ%20de%20Mars%20(5).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmZkf6pRfwFQNXiTDj-jGAJsjeg0KrGxxnEk1DQ3_fdtw2hXK13fCbGCJemjHriGFNUrcotMT1B06l-HAo77_LaGq8PWI738Gs_ED3160X81deXBVdtzEiYl4UBKW08NllWAaujYRkqDh867TkTSbaK2Go9-HEQf4LSmBL0MTT7TW5BZeSjSfOKpX5zdQ/s320/Champ%20de%20Mars%20(4).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGWwoknggo9pUGse3NjF1dWlaD5aakxXSZg9UPsXh7BUUskRB369PpyJhbKQ9PW2Wm1HdwOgcLVtaaJviNm0WncXIWsKMhHPP9N-isA6JnERJg8PwK9DAf6oK8LrnnQyiBuNDvzRrbQj1M_61Djq6-2AZj5A3iEA_l2oc7RKDpW13CXxcyF5RsdOZIYMI/s320/Champ%20de%20Mars%20(3).png"
        ],
        rating: 4.0
    },
    {
        id: 6,
        title: "Buttes-Chaumont Park",
        description: "Buttes-Chaumont Park is a scenic park featuring hills, waterfalls, and a beautiful temple, ideal for leisurely walks.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH1G86A4fhISYBpOM2zRnZ3PmLaDu0NbzRPn6xmlKnA0IT299-yHfWsCzJPdlJQExSpjnNo9bWo6qeR6QK_GBdIO9yKmdBJGLvYXIh7OaaVMM995kRdpPPOcZYUU09yLKIY8I46lI0-Ih_IO0bHbqStxI0-EKslV1QUtfgFIbDQqa16tkr9R0g7kyFM5Q/s320/Buttes-Chaumont%20Park.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrvyENWWtKxxHOvVChIE6Q0B14lLU13E7_qxv-S9W3lPiqHn79ZWrgTCC3ulYaDcSCCvnmv3czekxYf26qabWFyt-l0WxVtRHSKt6vRYOZ1JogdeUtuNnfFEMuLaiwAaMjqKDpJVLMxoSGiM8KU95ZoqXuE_I4cHt3FoE62e0kXNFvGqTewxvd9hal0IQ/s320/Buttes-Chaumont%20Park%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJCiO2QXxxdooZeMl70Z7MP_GMnTzfsDBzXvHYfd1Omf2MbMtPc-Sh06kWjdFB2NHV9P3Wi5XDeoRzUIZRY2oF7ui08Z50Q5LomIZGJzssDM69GKMOOBs2fNN2_aujmld8XQOYntM10jncdBEXi_866jIZiGvZZ6j69h5XFHTm4av88JEInuOZ947eqf4/s320/Buttes-Chaumont%20Park%20(2).png"
        ],
        rating: 4.0
    },
    {
        id: 7,
        title: "Square du Vert-Galant",
        description: "Square du Vert-Galant is a small park at the tip of Île de la Cité, providing lovely views of the Seine.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgajtDg92gr4P0NdDc2-EdZgWP8qCw9CzhjXT7UWCUwA_hsVciRidMfWMAapPjR0N4yolQOIc0mCMg3wyxxum_R3TVbOF0o8lS-R9FaIb4bLfePP6Sm_uXt8sfOn_aBDQxeFs2B3kSBilcFfUnnlxN8G7XSzyChA803amgCpeIDFM15fiUh-zYDL8Ov6s8/s320/Square%20du%20Vert-Galant%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWpHST75d2CWsx-gaKeEM5cn5HOlcS-aHrZhXkVhm6UKaW6ZsGn5IPtsg8X6XF5wRH0ovw5fGQz1kQdbAfGvn7PDdI5KDDm0wYrKyLv4EVkkQrV9K8EOPVBT6qoT7jqOGc679nIETcEcmw_Xt6Yo2lcFB6fgHqsO0GS4oC35KOaNTt7LBrC6t2lJb9nls/s320/Square%20du%20Vert-Galant.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIxNrhXQKI_gqXxjz4JQrprRd-NNjtXRkGX4PlEfrsx38JjMREF71VAzFh9lqwvgfnA5E_bvuU05ULQT08Bmod6oKKT9Gq5tHMjDqx9VxaTIXSmHQHk61SL8sxQtt9lx1p7L-7bxHLoLyQruJAY_zGZO0coklRSdK8SKLTxSozmWdcfFXJAAHcMjLrtc0/s320/Square%20du%20Vert-Galant%20(2).png"
        ],
        rating: 4.5
    },
    {
        id: 8,
        title: "Ecole Du Breuil",
        description: "Ecole Du Breuil is a renowned horticultural school, surrounded by beautiful gardens showcasing various plant species.",
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwnzk0rNFzcDxSxoZ8W3V3cWePvYMFthDkjH-RUE6_2GVbRUi0XlFaRa1yheRxyAD02lSTiBskUtqCfjmmiCrrBmO7u6jhUtolhA5TPJVMt1toYtBS1lh1ky90TVnpEljI4y01MY-0K0B-W641LpDoY3fRP5p6Y7vw-c3nLaAbhdqpARXOQmrsorXwVQo/s320/Ecole%20Du%20Breuil%20(3).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizRtOlRulqa_qTU0QNJIonGIYEdxpOUi69Hq0qHwk__YFjEp4s_e1P5M0HPR80d5hiPj7rlkoAKbRm3-Knh2qRja3WYkVFyyn46ZiAZI_Jir-YZN3wl7uPZ0mjmT2BRK51yiht4rsCeLqiencKk5y9yFW8Sc6ctUCA4hGPPhsYyRt2MT3PuH4LQnCdOzE/s320/Ecole%20Du%20Breuil%20(2).png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYjap6YkZtKlH2AVnEy4HIe6_A2o1LD1MLiYRPh7qNToMS2fOtmuInNjI2tY_gRLpkWjfuOINNnVd2mLgr2F09kV_UibCxACr65t_K-YoJ0IKwvIEH87qu2S4qB6IrfzHVkwLyicQ02bO_HwjJYDNEIEubtX-S51v4n4usfBMa9ae1j_qPvfSgnKpj-LM/s320/Ecole%20Du%20Breuil.png"
        ],
        rating: 4.0
    }
];
