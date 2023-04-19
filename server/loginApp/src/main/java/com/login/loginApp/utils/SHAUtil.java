package com.login.loginApp.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;

public class SHAUtil {

    public static String salt = "SomethingToAddSecurity";

    public static String createHash(String value) {
        String res = value + salt;

        try {

            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(res.getBytes());


            byte[] result =md.digest();

            int max = result.length;
            String tmp;
            res = "";
            for (int i = 0; i < max; i++) {
                tmp =Integer.toHexString(0xFF & result[i]);
                res +=(tmp.length()<2) ? 0 + tmp : tmp;
            }

        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        return res;
    }//CreateHash()

    public static boolean verifyHash(String original, String hash) {

        String res = createHash(original);
        return res.equalsIgnoreCase(hash);

    }

    public static void main(String[] args) {

        String resultado = SHAUtil.createHash("Bernardo");

        System.out.println("resultado = " + resultado);

        System.out.println(SHAUtil.verifyHash("Bernardo", "e2e30d96f29b07b05f1a4437d4cbbe464cc8fc7f678e31d3d115231ecd1013d2"));
        System.out.println(SHAUtil.verifyHash("Bernardo", "e2e30d96f29b07b05f1a4437d4cbbe464cc8fc7f678e31d3d115231ecd10"));




    }



}// SHAUtil
