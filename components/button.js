import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Button({ children }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFBA26', // Alterando a cor de fundo
        paddingVertical: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 16,
        marginBottom: 16
    },
})