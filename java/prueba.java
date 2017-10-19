class Prueba {
    public static void main(String[] args) throws Exception {
        int g = 3;
        System.out.println(++g * 8);
        for (String arg : args) {
            System.out.println(arg);
        }
        String latin = "Error Inesperado: Error al comunicarse con Servicio de CrÃ©dito AgrÃ­cola... ComunÃ­quese con Soporte. ";
        String b = new String(latin.getBytes("ISO-8859-1"), "UTF-8");
        System.out.println(b);
    }
}